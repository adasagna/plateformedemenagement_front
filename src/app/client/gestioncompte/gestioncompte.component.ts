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
  localité:string="";
  passwordconfirm: string = "";
  telephone :string="";
  localite:string="";
  constructor(private authservice:AuthServiceService){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    console.log (this.userconnect.id, 'demenageur')

  }



  /*************Modifier profil************/
chargerinfo(paramid:any){
  this.user=paramid;
  this.Current_profile=paramid;
  this.name = this.Current_profile.name;
  this.email =this.Current_profile.email; 
  this.localité =this.Current_profile.localité; 
  this.telephone =this.Current_profile.telephone; 
  // this.email =this.Current_profile.email; 
  // this.email =this.Current_profile.email; 
}
putProfil(id:number){
this.authservice.putProfil(id, this.Current_profile).subscribe((data)=>{

})
}
}
