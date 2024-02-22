import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande.model';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';
import { DemandedevisService } from 'src/app/services/demandedevis.service';
import { DemenageurService } from 'src/app/services/demenageur.service';
import { InfosupService } from 'src/app/services/infosup.service';
import { info } from 'src/app/models/informations';
import Swal from 'sweetalert2';

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
  image: any=[];  
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
    const tabdemandes = new FormData();
    tabdemandes.append('images[]', this.image);      
    tabdemandes.append('adresse_actuelle' ,this.adresse_actuelle);
    tabdemandes.append('nouvelle_adresse',this.nouvelle_adresse);
    tabdemandes.append('informations_bagages',this. informations_bagages);
    tabdemandes.append('date_demenagement',this. date_demenagement);
    
    this.demandedevis.postDemandeDevis( this.id_demenageur, tabdemandes).subscribe(
      (data) => {
        console.log('Demande de devis envoyée avec succès au déménageur:', data); 
      }
      )
      Swal.fire({
        icon: 'success',
        title: 'Demande devis envoyée',
        text: 'La demande de devis a été modifiée avec succès.',
        timer: 2000, // Ferme l'alerte après 2 secondes (2000 ms)
      });
    }


    getFile(event: any) {
      console.warn(event.target.files[0]);
      this.image = event.target.files[0] as File;
    }


    

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
        console.warn(data )
        this.listinfos = data.data,
        console.warn( 'tous les informations' ,data.allinformationsuppofallmover)
      
    }
      )
};
}
