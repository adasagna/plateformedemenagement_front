import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/models/demande.model';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';
import { DemandedevisService } from 'src/app/services/demandedevis.service';
import { DemenageurService } from 'src/app/services/demenageur.service';
import { InfosupService } from 'src/app/services/infosup.service';
import { info } from 'src/app/models/informations';
import Swal from 'sweetalert2';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';
import { SouscriptionService } from 'src/app/services/souscription.service';

@Component({
  selector: 'app-accueilclient',
  templateUrl: './accueilclient.component.html',
  styleUrls: ['./accueilclient.component.css']
})
export class AccueilclientComponent implements OnInit {
  OffreService: any
  Listoffre:any
  showCard: boolean = true;
  adresse_actuelle: string = "";
  nouvelle_adresse: string = "";
  informations_bagages: string = "";
  date_demenagement: string = "";
  images: any=[];  
  nom_entreprise: string="";
  annee_creation: string="";
  NINEA: string ="";
  presentation: string="";

  newdemande: any;
  listeDemenageur: any[] = [];
  userconnect: any;
  listinfos: info[] = [];
  selectedDemenageurId: number = 1;

  email: string ="";
  name: string="";
  password: string="";
  telephone: string="";
  localite: string="";
  passwordconfirm: string="";
  role: string="";
  id:number=0
  addressErrorMessage: string = "";
  nouvelleErrorMessage: string = "";

  searchTerm: any;

  isAddressInvalid: boolean = false; 
  isNouvelleInvalid:boolean=false;
  constructor(
    private userService: UserService,
    private demandedevis: DemandedevisService,
    private demenageur: DemenageurService,
    private info: InfosupService,
    private authservice: AuthServiceService,
    private route:Router,
    private offreservice: OffreService,
    private souscriptionservice: SouscriptionService
  ) {}
  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getAllDemenageur();
    this.getInfo();
  }
    // Fonction de validation pour vérifier si le champ commence par un espace
validateInput(value: string): boolean {
  if (value && value.trim() !== value) {
      return false; // Le champ commence par un espace
}
  return true; // Le champ est valide
}

validateAddress() {
  // Appeler la fonction de validation et stocker le résultat dans une variable
  const isValid = this.validateInput(this.adresse_actuelle);

  // Vérifier si le champ contient un caractère numérique
  const containsNumeric = /\d/.test(this.adresse_actuelle);

  // Mettre à jour un drapeau pour afficher ou masquer le message d'erreur
  this.isAddressInvalid = !isValid || containsNumeric;

  // Afficher un message d'erreur si le champ contient un caractère numérique
  if (containsNumeric) {
      this.addressErrorMessage = "Le champ ne doit pas contenir de caractère numérique.";
  } else {
      this.addressErrorMessage = ""; // Réinitialiser le message d'erreur
  }
}

validateNouvelle() {
  // Appeler la fonction de validation et stocker le résultat dans une variable
  const isValid = this.validateInput(this.nouvelle_adresse);

  // Vérifier si le champ contient un caractère numérique
  const containsNumeric = /\d/.test(this.nouvelle_adresse);

  // Mettre à jour un drapeau pour afficher ou masquer le message d'erreur
  this.isNouvelleInvalid = !isValid || containsNumeric;

  // Afficher un message d'erreur si le champ contient un caractère numérique
  if (containsNumeric) {
      this.nouvelleErrorMessage = "Le champ ne doit pas contenir de caractère numérique.";
  } else {
      this.nouvelleErrorMessage = ""; // Réinitialiser le message d'erreur
  }
}
  id_demenageur:any
  Showdemenageur(paramid:any) {
    this.id_demenageur=paramid;
    this.showCard = !this.showCard;
  }
  
  // envoie de demande de devis à un demenageur///
  
  postDemandeDevis() {
    // Vérifier si tous les champs obligatoires sont remplis
    if (!this.images || !this.adresse_actuelle || !this.nouvelle_adresse || !this.informations_bagages || !this.date_demenagement) {
        Swal.fire({
            icon: 'error',
            title: 'Erreur de saisie',
            text: 'Veuillez remplir tous les champs obligatoires.',
            timer: 2000, 
        });
        return; 
    }

    // Tous les champs sont remplis, procéder à l'envoi de la demande de devis
    const tabdemandes = new FormData();
    tabdemandes.append('images[]', this.images);
    tabdemandes.append('adresse_actuelle', this.adresse_actuelle);
    tabdemandes.append('nouvelle_adresse', this.nouvelle_adresse);
    tabdemandes.append('informations_bagages', this.informations_bagages);
    tabdemandes.append('date_demenagement', this.date_demenagement);

    if (this.images && this.images.length > 0) {
      for (let i = 0; i < this.images.length; i++) {
        tabdemandes.append('image[]', this.images[i]);
      }
    }
    this.demandedevis.postDemandeDevis(this.id_demenageur, tabdemandes).subscribe(
        (data) => {
            console.log('Demande de devis envoyée avec succès au déménageur:', data);
            Swal.fire({
                icon: 'success',
                title: 'Demande devis envoyée',
                text: 'La demande de devis a été modifiée avec succès.',
                timer: 2000, // Ferme l'alerte après 2 secondes (2000 ms)
            });

            // Réinitialiser les valeurs des champs après l'envoi réussi
            this.images = null;
            this.adresse_actuelle = '';
            this.nouvelle_adresse = '';
            this.informations_bagages = '';
            this.date_demenagement = '';
        },
        // (error) => {
        //     console.error('Erreur lors de l\'envoi de la demande de devis:', error);
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Erreur lors de l\'envoi',
        //         text: 'Une erreur s\'est produite lors de l\'envoi de la demande de devis. Veuillez réessayer plus tard.',
        //     });
        // }
    );
}



getFile(event: any) {

  this.images = [];
  const files = event.target.files as FileList; //au lieu de File vous mettez fileList pour specifier que c'est une liste de fichier

  // Parcourez chaque fichier dans la liste et ajoutez-le à votre tableau d'images
  for (let i = 0; i < files.length; i++) {
    this.images.push(files[i]);
  }

  console.warn('La liste des images :', this.images);
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
/*******recherche demenageur par localite***********/
recherche(){
  this.info.recherche().subscribe((data)=>{
    this.listinfos=data.data
    console.log('recherche trouve' ,data)
  })
}
/**********Souscrire à une offre****************/
Souscriptione(){
  const tabsouscription = new FormData();
  tabsouscription.append('images[]', this.images);      
  tabsouscription.append('adresse_actuelle' ,this.adresse_actuelle);
  tabsouscription.append('nouvelle_adresse',this.nouvelle_adresse);
  tabsouscription.append('informations_bagages',this. informations_bagages);
  tabsouscription.append('date_demenagement',this. date_demenagement);
  
  this.souscriptionservice.Souscriptione( this.id_demenageur, tabsouscription).subscribe(
    (data) => {
      console.log('Souscription envoyée:', data); 
    }
    )
    Swal.fire({
      icon: 'success',
      title: 'Souscription reussi',
      text: 'Votr souscription a été envoyée.',
      timer: 2000, // Ferme l'alerte après 2 secondes (2000 ms)
    });
  }

/*********Deconnexion*********/
logout(){
this.authservice.logout().subscribe((response) => {
  console.log('utilisateur deconnecté', response);
  this.route.navigate(['/connexion']);

})
}
/*******pagination */
  projetParPage = 3; // Nombre d'projet par page
  pageActuelle = 1; // Page actuelle
getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.projetParPage;
    const indexFin = indexDebut + this.projetParPage;
    return this.listinfos.slice(indexDebut, indexFin);
  }
  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.listinfos.length / this.projetParPage);
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.listinfos.length / this.projetParPage);
  }

}
