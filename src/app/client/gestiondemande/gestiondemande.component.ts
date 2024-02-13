// gestiondemande.component.ts

import { Component, OnInit } from '@angular/core';
import { DemandedevisService } from 'src/app/services/demandedevis.service';
import { Demande } from 'src/app/models/demande.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-gestiondemande',
  templateUrl: './gestiondemande.component.html',
  styleUrls: ['./gestiondemande.component.css']
})
export class GestiondemandeComponent implements OnInit {
  // Ajoutez ces propriétés pour lier les valeurs des champs du formulaire
  adresse_actuelle: string = "";
  nouvelle_adresse: string = "";
  informations_bagages: string = "";
  date_demenagement: string = "";
  
  
  constructor(private demandedevis: DemandedevisService, private userservice: UserService) { }
  listeDemandedevis: any[] = [];
  userconnect:any
  
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    console.log (this.userconnect.id, 'sduhvsduhvodu')
    // this. getAllDemenageurs();
   this.getAllDemandedevis(this.userconnect.id);
  }
  


    // Obtenir la liste des demandes de devis
   getAllDemandedevis(id:number) {
     this.demandedevis.getAllDemandeDevis(id).subscribe(
       (data) => {
         this.listeDemandedevis = data.data;
        console.log("liste de la reponse",data.demandeDevisOfCustomers)
        this.listeDemandedevis=data.demandeDevisOfCustomers
        console.log(this.listeDemandedevis)
       }
      
     )
   }

  }




