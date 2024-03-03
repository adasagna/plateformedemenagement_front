import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestioncompte',
  templateUrl: './gestioncompte.component.html',
  styleUrls: ['./gestioncompte.component.css']
})
export class GestioncompteComponent implements OnInit  {
userconnect:any;
user:any;
Current_profile:any;
  name: string = "";
  email: string = "";
  password: string = "";
  localite:string="";
  passwordconfirm: string = "";
  telephone :string="";
  constructor(private authservice:AuthServiceService, private route:Router,
    ){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    console.log (this.userconnect.id, 'demenageur')

  }



  /*************Modifier profil************/
chargerinfo(paramuser:any){
  this.user=paramuser;
  this.Current_profile=paramuser;

  this.name=this.userconnect.Nom;
  this.email=this.userconnect.Email;
  this.localite=this.userconnect.Localite;
  this.telephone=this.userconnect.Telephone;
  // this.email =this.Current_profile.email; 
  // this.email =this.Current_profile.email; 
}
putProfil(id:number){
  const profil={
    email:this.userconnect.Email,
    telephone:this.userconnect.Telephone,
    name:this.userconnect.Nom,
    localite:this.userconnect.Telephone,
  }
  this.authservice.putProfil(id, profil).subscribe((data)=>{
    console.log(data);

})
}
/*****Deconnexion**************/
logout(){
  this.authservice.logout().subscribe((response) => {
    console.log('utilisateur deconnecté', response);
    this.route.navigate(['/connexion']);
  
  })
  }
}
