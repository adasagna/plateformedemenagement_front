import { Component, OnInit } from '@angular/core';
import { InfosupService } from 'src/app/services/infosup.service';

@Component({
  selector: 'app-gestionprofil',
  templateUrl: './gestionprofil.component.html',
  styleUrls: ['./gestionprofil.component.css']
})
export class GestionprofilComponent implements OnInit {
  listinfos: any[] = [];
  userconnect:any
  user_id:number = 0;
  nom_entreprise: string = "";
  presentation: string = "";
  annee_creation: string = "";
  NINEA: string = "";
  forme_juridique: string = "";

  constructor(private info:InfosupService){}
  ngOnInit(): void {
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
}
