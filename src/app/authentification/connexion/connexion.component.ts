// connexion.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
  // login: any;
  Signup: any;
  userOnline: any;
  role: any;
  

    // Variables pour faire la vérifications
    verifname : String  =  "";
    verifemail : String = "";
    veriflocalite : String = "";
    verifpassword : String = "";
    verifpasswordconfirm : String = "";
    veriftelephone : String = "";
    verifrole : String = "";

    // Variables si les champs sont exacts
  exactname : boolean = false;
  exactemail : boolean = false;
  exactlocalite : boolean = false;
  exactpassword : boolean = false;
  exactPasswordconfirm : boolean = false;
  exacttelephone: boolean = false;
  exactrole: boolean = false;
  isValid: boolean = false;


   // Variable pour la connexion 
   emailCon : String = "";
   passwordCon: String = "";
 
   // Pour vérifier les champs pour la connexion 
   verifemailCon : String = "";
   verifpasswordCon: String = "";
  
   // Variables Si les valeurs sont exactes
   exactemailCon : boolean = false;
   exactpasswordCon : boolean = false; 
  tabUsers!: any  ;
  userFound: any;
  idLastUser: any;

  constructor(private authservice: AuthServiceService, private route:Router) {

  }
  ngOnInit(): void {
    if(!localStorage.getItem("infoUserConnect")){
      localStorage.setItem("infoUserConnect", JSON.stringify("token"));
    }
  }
  showLoginForm: boolean = true;
  isDemenageur: boolean = false;

  showLogin() {
    this.showLoginForm = !this.showLoginForm;
  }
  id:number=0
  pass:string = "";
  name: string = "";
  email: string = "";
  password: string = "";
  localité:string="";
  passwordconfirm: string = "";
  telephone :string="";
  localite:string="";
  user:any;

 
 
  connexion() {
   const data ={
     email: this.email,
     password: this.pass,
    //  id: this.id
    }
    this.authservice.connexion(data).subscribe(
      (response) =>{
        console.log("affichage du data",response);
        console.log("affichage du user",response.user.role);
        localStorage.setItem("infoUserConnect", JSON.stringify(response.user));
        localStorage.setItem("access_token", JSON.stringify(response.authorisation.token).replace(/['"]+/g, ''));
        if (response.user.role==='Admin') {
          this.route.navigate(['accueiladmin']);        
        }
        else if (response.user.role === 'Client' ){
          this.route.navigate(['/accueilclient']); 
        }else{
          this.route.navigate(['/accueildemenageur']);
        }
      
      });
      
      
     
    }
    
    viderChampsCon(){
      
    }
    
    viderChamps(){}

    // Fonction de Verification de l'email pour la fonctionnalité connexion
  verifEmailConFonction(){
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactemailCon = false;
    
    if(this.emailCon == ""){
      this.verifemailCon = "Veuillez renseigner votre email";
    }
    else if (!this.emailCon.match(emailPattern) ){
      this.verifemailCon = "Veuillez donner un email valide";
    }
    else {
      this.verifemailCon = "";
      this.exactemailCon = true;
    }
  }

  // Fonction de Verification du mot de passe de la connexion
  verifPasswordConFonction(){
    this.exactpasswordCon = false;
    if(this.passwordCon == ""){
      this.verifpasswordCon = "Veuillez renseigner votre mot de passe";
    }
    else if (this.passwordCon.length < 5 ){
      this.verifpasswordCon = "Mot de passe doit être supérieur ou égal à 5";
    }
    else{
      this.verifpasswordCon = "";
      this.exactpasswordCon = true;
    }
  }
    singin(){
      const data ={
        email: this.email,
        password: this.password,
        telephone: this.telephone,
        localite:this.localite,
        name:this.name,
        passwordconfirm: this.passwordconfirm,
        role: this.role,
        id: this.id
        
      };
      this.authservice.singin(data).subscribe((data) => {
        console.log("affichage de la reponse ",data);
        console.log("affichage de la reponse user",data.user.role);
        
        this.showLogin();
        if (data.user.role==='Admin') {
          this.route.navigate(['accueiladmin']);        
        }
        else if (data.user.role === "Client"   ){
          this.route.navigate(['/accueilclient']); 
        }else{
          this.route.navigate(['/accueildemenageur']);
        }
        
        this.route.navigate(['/connexion']);
        
      });
      
    }
    showMessage(arg0: string, arg1: string, arg2: string) {
      throw new Error('Method not implemented.'); 
    }
    
    verifierChamps(title:any, text:any, icon:any) {
     Swal.fire({
       title: title,
       text: text,
       icon: icon
     });
   }
  // .....................verification des champs de saisies..................//
  verifnomcompletFonction(){
    this.exactname = false;
    if(this.name == ""){
      this.verifname = "Veuillez renseigner votre nomcomplet";
    }
    else if (this.name.length < 3 ){
      this.verifname = "Le nom est trop court";
      
    }
    else{
      this.verifname = "";
      this.exactname = true;
    }
  }

  veriflocalieFonction(){

    this.exactlocalite = false;
    if(this.localite == ""){
      this.veriflocalite = "Veuillez renseigner votre localité";
    }
    else if (this.localite.length < 3 ){
      this.veriflocalite = "Le nom est trop court";
      
    }
    else{
      this.veriflocalite = "";
      this.exactlocalite = true;
    }
  }
  
  // Verification de  l'email 
  verifEmailFonction(){
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactemail = false;
    
    if(this.email == ""){
      this.verifemail = "Veuillez renseigner votre email";
    }
    else if (!this.email.match(emailPattern) ){
      this.verifemail = "Veuillez donner un email valide";
    }
    else {
      this.verifemail = "";
      this.exactemail = true;
    }
  }

  verifroleFonction() {
    this.isValid = this.role !== "";
    this.exactrole = this.isValid && (this.role === "Demenageur" || this.role === "Client");
  
    if (!this.isValid) {
      this.role = "Veuillez choisir un rôle";
    } else if (!this.exactrole) {
      this.verifrole = "Le rôle sélectionné n'est pas valide.";
    } else {
      this.verifrole = "";
      this.exactrole = true;
    }
  }
  
  veriftelephoneFonction(){

    this.exacttelephone = false;
    if(this.telephone == ""){
      this.veriftelephone = "Veuillez renseigner votre telephone"
    }
    else if (this.telephone.length < 7 ){
      this.veriftelephone = "Le numero est trop court";
      
    }
    else{
      this.veriftelephone = "";
      this.exacttelephone = true;
    }
  }
  
  // Verification du mot de passe pour l'inscription
  verifPasswordFonction(){
    this.exactpassword = false;
    if(this.password == ""){
      this.verifpassword = "Veuillez renseigner votre mot de passe";
    }
    else if (this.password.length < 5 ){
      this.verifpassword = "Mot de passe doit être supérieur ou égal à 5";
    }
    else{
      this.verifpassword = "";
      this.exactpassword = true;
    }
  }

  // Verification du mot de passe confirmé
  verifPasswordConfFonction(){
    this.exactPasswordconfirm  = false;
    if(this.passwordconfirm == ""){
      this.verifpasswordconfirm = "Veuillez renseigner à nouveau votre mot de passe";
    }
    else if (this.password != this.passwordconfirm){
      this.verifpasswordconfirm= "Les deux mots de passe ne sont pas conformes";
    }
    else {
      this.verifpasswordconfirm = "";
      this.exactPasswordconfirm = true;
    }
  }

   
  validerInscription(){
    this.verifEmailFonction();
    this.verifnomcompletFonction();
    this.veriflocalieFonction();
    this.veriftelephoneFonction();
    this.verifPasswordFonction();
    this.verifPasswordConfFonction();
    this.verifroleFonction();


    if(this.tabUsers.length){
      console.warn("taille du tab");
      this.idLastUser = this.tabUsers[this.tabUsers.length -1].idUser;
      console.log(this.idLastUser)
    }
    else {
      this.idLastUser = 0;
      console.warn("idLastUser = 0")
    }

    // Si les champs sont exacts, on ajoute le compte dans le tableau localStorage
    if(this.exactname && this.exactlocalite && this.exacttelephone && this.exactemail && this.exactpassword && this.exactPasswordconfirm && this.exactrole){
      let user = {
        idUser:  this.idLastUser + 1,
        name: this.name,
        localite: this.localite,
        email: this.email,
        password:  this.password,
        telephone:  this.telephone,
        role:  this.role,
        user: []
      }

      console.log(this.idLastUser);
      let userExist = this.tabUsers.find((elemt:any)=> elemt.email == this.email);

      if (userExist){
        // Est executé que si l'on trouve un compte avce le meme email que celui qui a été renseigné
        this.verifierChamps('Erreur!', 'Cet email est déjà utilisé', 'error');
      }
      else {
        // On crée le compte 
        this.tabUsers.push(user);
        // localStorage.setItem("Users", JSON.stringify(this.tabUsers));
        this.verifierChamps('Felicitation!', 'Inscription reuissie', 'success');
        this.viderChamps();
      }
      
    }
  }
}

