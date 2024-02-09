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
  nom_entreprise: string = "";
  adresse_actuelle: string = "";
  nouvelle_adresse: string = "";
  informations_bagage: string = "";
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
  
//  envoiDemandeDevis (){
//     const nouvelleDemande: Demande = {
//       nom_entreprise: this.nom_entreprise,
//       adresse_actuelle: this.adresse_actuelle,
//       nouvelle_adresse: this.nouvelle_adresse,
//       informations_bagages: this.informations_bagage,
//       date_demenagement: this.date_demenagement,
//     }
//     // .........................envoi de demande......................
//     // this.demandedevisService.postDemandeDevis(nouvelleDemande).subscribe(
//     //   (response:Demande) => {
//     //     console.log('Demande de devis enregistrée avec succès:', response);
//     //     // Réinitialiser les valeurs du formulaire après l'enregistrement
//     //     this.nom_entreprise = "";
//     //     this.adresse_actuelle = "";
//     //     this.nouvelle_adresse = "";
//     //     this.information_bagage = "";
//     //     this.date_demenagement = "";
//     //   });
//     }

    // postDemandeDevis(id:number){
    //   this.demandedevis.postDemandeDevis(id).subscribe(
    //       (response:Demande) => {
    //         console.log('Demande de devis enregistrée avec succès:', response);    }
    
    //       );
    //     }

    // Obtenir la liste des demandes de devis
   getAllDemandedevis(id:number) {
     this.demandedevis.getAllDemandeDevis(id).subscribe(
       (data) => {
         this.listeDemandedevis = data.data;
        //  console.log(this.listeDemandedevis);
        console.log("liste de la reponse",data.demandeDevisOfCustomers)
        this.listeDemandedevis=data.demandeDevisOfCustomers
        console.log(this.listeDemandedevis)
        // console.log(this.listeDemandedevis);
       }
       // (error) => {
       //   console.error('Erreur lors de la récupération des demandes de devis', error);
       // }
     )
   }

  }


// function getAllDemenageur() {
//   throw new Error('Function not implemented.');
// }

