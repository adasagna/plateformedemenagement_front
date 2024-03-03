import { Component, OnInit } from '@angular/core';
import { InfosupService } from 'src/app/services/infosup.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-gestionprofil',
  templateUrl: './gestionprofil.component.html',
  styleUrls: ['./gestionprofil.component.css']
})
export class GestionprofilComponent implements OnInit {
  listinfos: any[] = [];
  userconnect:any
  user:any
  user_id:number = 0;
  nom_entreprise: string = "";
  presentation: string = "";
  annee_creation: string = "";
  NINEA: string = "";
  forme_juridique: string = "";

  name: string = "";
  email: string = "";
  password: string = "";
  localite:string="";
  passwordconfirm: string = "";
  telephone :string="";

  constructor(private info:InfosupService,private authservice:AuthServiceService, private route:Router){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    console.log (this.userconnect.id, 'demenageur')

    this.postInfo();
  }
  Showinformation:boolean=true
  
  Showinfosup(){
    this.Showinformation=!this.Showinformation
  }
  /**ajout information suplementaire d'un demenageur */
  postInfo(){
    
    // alert(this.nom_entreprise)
    const tabinfo={
    nom_entreprise: this.nom_entreprise,
    presentation: this.presentation,
    annee_creation: this.annee_creation ,
    NINEA: this.NINEA,
    forme_juridique:this.forme_juridique,
    }
    this.info.postInfo(tabinfo).subscribe((data) => {
      console.log('Informations suplementaires d un déménageur:', data); 

  }
    )
}
/**********Modifier Profile***********/
chargerinfo(paramuser:any){

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
/*************Deconnexion**************/
logout(){
  this.authservice.logout().subscribe((response) => {
    console.log('utilisateur deconnecté', response);
    this.route.navigate(['/connexion']);
  
  })
  }
}
