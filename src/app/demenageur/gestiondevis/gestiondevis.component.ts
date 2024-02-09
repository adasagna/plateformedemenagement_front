import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestiondevis',
  templateUrl: './gestiondevis.component.html',
  styleUrls: ['./gestiondevis.component.css']
})
export class GestiondevisComponent implements OnInit {
  listeDemandedevis: any[] = [];


  Showdevis:boolean=true
  
  nom_entreprise: string="";
  adresse_actuelle: string="";
  nouvelle_adresse: string="";
  information_bagage: string="";
  date_demenagement: string="";
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  GenereDevis(){
    this.Showdevis=!this.Showdevis;
  }

}
