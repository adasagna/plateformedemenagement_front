// gestiondemande.component.ts

import { Component, OnInit } from '@angular/core';
import { DemandedevisService } from 'src/app/services/demandedevis.service';
import { Demande } from 'src/app/models/demande.model';
import { UserService } from 'src/app/services/user.service';
import { DetailsdemandeclientService } from 'src/app/services/detailsdemandeclient.service';
import Swal from 'sweetalert2';


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
  image: any=[];  

  currentDemande: any;

  Url = "http://127.0.0.1:8000/api";
  constructor(private demandedevis: DemandedevisService, private userservice: UserService, private detailsdemande:DetailsdemandeclientService) { }
  listeDemandedevis: any[] = [];
  userconnect:any
  demande:any
  
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

   annocesfound:any;
   annonce_id:any;

   getAlldetailsdemandeclient(id:number){
    this.detailsdemande.getAlldetailsdemandeclient(id).subscribe((reponse:any)=>{
      console.log(reponse); 
      this.annocesfound=reponse.data;
    });
   }
   /**modifier une demande de devis */
   ChangerDemande(paramDemande:any){
    this.currentDemande = paramDemande;
    this.adresse_actuelle = paramDemande.adresse_actuelle;
    this.nouvelle_adresse = paramDemande.nouvelle_adresse;
    this.informations_bagages = paramDemande.informations_bagages;
    this.date_demenagement = paramDemande.date_demenagement;
    console.log('test',this.date_demenagement)
    this.image = paramDemande.image;
    
  }
  
  putDemandeDevis(id: any){
    this.currentDemande.adresse_actuelle = this.adresse_actuelle;
    this.currentDemande.nouvelle_adresse = this.nouvelle_adresse;
    this.currentDemande.informations_bagages = this.informations_bagages;
    this.currentDemande.date_demenagement = this.date_demenagement;
    this.currentDemande.image = this.image;
    
    this.demandedevis.putDemandeDevis(id,this.currentDemande).subscribe((data)=>
    { 
    console.log (' demande de devis modifiée:',data ) 
  }
    )
    Swal.fire({
      icon: 'success',
      title: 'Modification réussie',
      text: 'La demande de devis a été modifiée avec succès.',
      timer: 2000, // Ferme l'alerte après 2 secondes (2000 ms)
    });
  }

  /**suprimer un demande de devis */
  
  putDemande(id:number){
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Voulez-vous vraiment supprimer cette demande de devis?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur confirme la suppression, appelez votre méthode pour supprimer la demande de devis
        this.demandedevis.putDemande(id, this.demande).subscribe(
          (data) => {
            console.log('Demande de devis supprimée:', data);
            Swal.fire(
              'Supprimé!',
              'La demande de devis a été supprimée.',
              'success'
            );
          },
          (error) => {
            console.error('Erreur lors de la suppression de la demande de devis:', error);
            Swal.fire(
              'Erreur!',
              'Une erreur est survenue lors de la suppression de la demande de devis.',
              'error'
            );
          }
        );
      }
    });
  }
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }
}




