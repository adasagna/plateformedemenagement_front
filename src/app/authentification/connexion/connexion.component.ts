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
    // idLastUser: any;

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
  // user:any;

 
 

  connexion() {
    const data = {
      email: this.emailCon,
      password: this.passwordCon,
    };
    this.authservice.connexion(data).subscribe(
      (response) => {
        console.log("affichage du data", response);
        console.log("affichage du user", response.user.role);
        localStorage.setItem("infoUserConnect", JSON.stringify(response.user));
        localStorage.setItem("access_token", JSON.stringify(response.authorisation.token).replace(/['"]+/g, ''));
  
        // Afficher SweetAlert après authentification réussie
        Swal.fire({
          title: 'Authentification réussie',
          text: 'Bienvenue, ' + response.user.role + '!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Rediriger l'utilisateur après avoir cliqué sur 'OK'
          if (response.user.role === 'Admin') {
            this.route.navigate(['accueiladmin']);
          } else if (response.user.role === 'Client') {
            this.route.navigate(['/accueilclient']);
          } else {
            this.route.navigate(['/accueildemenageur']);
          }
        });
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
        Swal.fire({
          title: 'Erreur',
          text: 'Échec de l\'authentification. Veuillez vérifier vos informations de connexion.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
  
    
    viderChampsCon(){
      
    }
    
    viderChamps(){}

    // Fonction de Verification de l'email pour la fonctionnalité connexion
  verifEmailConFonction(){
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactemailCon = false;

    if (emailPattern.test(this.email)) {
    } 
    
    if(this.emailCon == ""){
      this.verifemailCon = "";
    }
    else if (!this.emailCon.match(emailPattern) ){
      this.verifemailCon = "Veuillez donner un email valide";
    } else {
      this.exactemailCon = true;
    }
    if (this.emailCon == '') {
      this.verifemailCon = "";
    }
    if (!this.emailCon || this.emailCon.trim().length) {
      this.verifemailCon = "Ce champs est requis."
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
    if (!this.passwordCon || this.password.trim.length) {
      this.verifpassword = "Ce champs est requis."
    }
  }

  validerChamps() {
    this.verifEmailConFonction();
    this.verifPasswordConFonction();
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

  // VFNOM(){
  //   const valide = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-']*$/;
  //   // const sansChiffres = /^\D*$/;

  //   if (/^\s/.test(this.nom)) {
  //     this.colorNom = "rgb(249, 67, 67)";
  //     this.messageNom = "Le nom ne peut pas commencer par un espace.";
  //   }
  // }
  verifnomcompletFonction(){
    const valide = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ-']*$/;
    if (/^\s/.test(this.name)) {
      this.verifname = "Le nom ne peut pas commencer par des un espace."
    } else if (!valide.test(this.name)) {
      this.verifname = "Format invalide!"
    } else if (this.name.length < 3) {
      this.verifname = "Le nom est trop court.";
    }  else {
      this.verifname = "Format valide!";
      this.exactname = true;
    }
      
    if (this.name == '') {
      this.verifname = '';
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
    if (!this.email || this.email.trim().length) {
      this.verifemail = "Ce champs est requis."
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
    // const telRegex = /^(77|78|70|76)[0-9]{7}/;
    // const val = this.telephone.length == 9 && telRegex.test(this.telephone);
    // const tel = Number(this.telephone.slice(0, 2)) == 77 || Number(this.telephone.slice(0, 2)) == 78 || Number(this.telephone.slice(0, 2)) == 70 || Number(this.telephone.slice(0, 2)) == 76;
    // this.exacttelephone = false;
    // if (val) {
    //   this.veriftelephone = "Format valide!";
    //   this.exacttelephone = true;
    // }
    // if (!val) {
    //   this.veriftelephone = "Format de téléphone invalide";
    // }
    // if (!tel) {
    //   this.veriftelephone = "Commencez par 70 ou 76 ou 77 ou 78";
    // } else if (tel) {
    //   this.veriftelephone = "";
    // }
    // if (!Number(this.telephone)) {
    //   this.veriftelephone = "Caracteres inacceptable";
    // }
    // if (this.telephone == '') {
    //   this.veriftelephone = "";
    // }
    // if(this.telephone == ""){
    //   this.veriftelephone = "Veuillez renseigner votre telephone"
    // }
    // else if (this.telephone.length < 9 ){
    //   this.veriftelephone = "Le numero est trop court";
    // }
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


}
}

