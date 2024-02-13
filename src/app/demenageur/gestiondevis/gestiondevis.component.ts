import { Component, OnInit } from '@angular/core';
import { DemandedevisService } from 'src/app/services/demandedevis.service';
import { DemanderecuService } from 'src/app/services/demanderecu.service';

@Component({
  selector: 'app-gestiondevis',
  templateUrl: './gestiondevis.component.html',
  styleUrls: ['./gestiondevis.component.css']
})
export class GestiondevisComponent implements OnInit {
  listeDemandedevis: any[] = [];
  listeDemanderecus: any[] = [];
  userconnect:any
  demandedevis: any;
  constructor (private demanderecu: DemanderecuService, demandedevis:DemandedevisService){}
  Showdevis:boolean=true
  
  nom_entreprise: string="";
  adresse_actuelle: string="";
  nouvelle_adresse: string="";
  information_bagage: string="";
  date_demenagement: string="";
  
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getAllDemanderecu(this.userconnect.id)
  }
 
  GenereDevis(){
    this.Showdevis=!this.Showdevis;
  }

  getAllDemanderecu(id:number) {
    this.demanderecu.getAllDemanderecu(id).subscribe(
      (data) => {
        this.listeDemanderecus = data.data;
       console.log("liste de la reponse",this.listeDemanderecus)
      }
      
    )
  }

}
