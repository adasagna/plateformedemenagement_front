import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

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
  constructor(private authservice:AuthServiceService){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    console.log (this.userconnect.id, 'demenageur')

  }



  /*************Modifier profil************/
chargerinfo(paramuser:any){
  this.user=paramuser;
  this.Current_profile=paramuser;

  this.name=paramuser.name;
  this.email=paramuser.email;
  this.localite=paramuser.localite;
  this.telephone=paramuser.telephone;
  // this.email =this.Current_profile.email; 
  // this.email =this.Current_profile.email; 
}
putProfil(id:number){
  this.Current_profile.name=this.name,
  this.Current_profile.email=this.email,
  this.Current_profile.localité=this.localite,
  this.Current_profile.telephone=this.telephone
  this.authservice.putProfil(id, this.Current_profile).subscribe((data)=>{
    console.log(data);

})
}
}
