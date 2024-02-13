import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande.model';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';
import { DemandedevisService } from 'src/app/services/demandedevis.service';
import { DemenageurService } from 'src/app/services/demenageur.service';
import { InfosupService } from 'src/app/services/infosup.service';
import { info } from 'src/app/models/informations';

@Component({
  selector: 'app-accueilclient',
  templateUrl: './accueilclient.component.html',
  styleUrls: ['./accueilclient.component.css']
})
export class AccueilclientComponent implements OnInit {
  showCard: boolean = true;
  adresse_actuelle: string = "";
  nouvelle_adresse: string = "";
  informations_bagages: string = "";
  date_demenagement: string = "";

  
  nom_entreprise: string="";
  annee_creation: string="";
  NINEA: string ="";
  presentation: string="";

  newdemande: any;
  listeDemenageur: any[] = [];
  userconnect: any;
  listinfos: info[] = [];
  selectedDemenageurId: number = 1;
  constructor(
    private userService: UserService,
    private demandedevis: DemandedevisService,
    private demenageur: DemenageurService,
    private info: InfosupService
  ) {}


  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getAllDemenageur();
    this.getInfo();
  }

  id_demenageur:any
  Showdemenageur(paramid:any) {
    alert(paramid);
    this.id_demenageur=paramid;
    // if (this.selectedDemenageurId === 0) {
    //   alert("Veuillez sélectionner un déménageur avant d'envoyer la demande de devis.");
    //   return;
    // }
    this.showCard = !this.showCard;
  }
// envoie de demande de devis à un demenageur///
 
    postDemandeDevis(){
      alert(this.nouvelle_adresse)
      alert(this.adresse_actuelle)
      alert(this.date_demenagement)
      alert(this.informations_bagages)
      const tabdemandes={
    adresse_actuelle: this.adresse_actuelle,
    nouvelle_adresse: this.nouvelle_adresse,
    informations_bagages: this.informations_bagages ,
    date_demenagement: this.date_demenagement,
      }
    this.demandedevis.postDemandeDevis( this.id_demenageur, tabdemandes).subscribe(
      (data) => {
        console.log('Demande de devis envoyée avec succès au déménageur:', data); 
      }
    )
    // this.envoiDemandeDevis=this.postDemandeDevis
  }


    // Vous pouvez appeler la méthode postDemandeDevis() du demandedevisService ici
    // // this.demandedevisService.postDemandeDevis(this.selectedDemenageurId).subscribe(
    // //   (response) => {
    // //     console.log('Demande de devis envoyée avec succès au déménageur:', response);
    // //     // Réinitialisez les valeurs du formulaire après l'envoi de la demande
    // //     this.nom_entreprise = "";
    // //     this.adresse_actuelle = "";
    // //     this.nouvelle_adresse = "";
    // //     this.informations_bagage = "";
    // //     this.date_demenagement = "";
    // //     // Réinitialisez également l'ID du déménageur sélectionné
    // //     this.selectedDemenageurId = 0;
    // //   },
    // //   (error) => {
    // //     console.error("Erreur lors de l'envoi de la demande de devis:", error);
    // //   }
    // // );

    getAllDemenageur() {
      this.demenageur.getAllDemenageur().subscribe(
        (response) => {
          this.listeDemenageur = response.data;
          console.log(this.listeDemenageur)
        }
      )
    };

    getInfo(){
      this.info.getInfo().subscribe((data)=> {
        this.listinfos = data.data;
        console.warn(this.listinfos )
        this.listinfos = data.informationsSuppOfMovers
        console.warn( 'tous les informations' ,data.informationsSuppOfMovers)
      
    }
      )
};
}
