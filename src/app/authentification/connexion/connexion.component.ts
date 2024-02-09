// connexion.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
  login: any;
  Signup: any;
  userOnline: any;
  tel: any;
  confirm: any;
  role: any;
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
 
  // onDemenageurChange() {
  //   this.isDemenageur = true;
  // }
  // showSignup() {
  //   this.showLoginForm = false;
  // }
  id:number=0
  pass:string = "";
  name: string = "";
  email: string = "";
  password: string = "";
  localité:string="";
  passwordconfirm: string = "";
  telephone :string="";
  localite:string="";
  // role : string[] = [];
  user:any;




  connexion() {
    const data ={
      email: this.email,
      password: this.pass,
      id: this.id
    }
      this.authservice.login(data).subscribe(
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
      // this.userOnline = (data.getItem('userOnline') || '');
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
}

