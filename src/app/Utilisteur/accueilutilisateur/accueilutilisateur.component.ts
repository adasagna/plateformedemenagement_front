import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accueilutilisateur',
  templateUrl: './accueilutilisateur.component.html',
  styleUrls: ['./accueilutilisateur.component.css'],
})
export class AccueilutilisateurComponent {
  constructor(private authservice:AuthServiceService, private route:Router){}
  Showservice:boolean=true
  estConnecte:boolean=false
  Showaccueil(){
    this.Showservice =!this.Showservice
  }
  demande(){
    if (!this.authservice.estConnecte) {
      Swal.fire({
        icon: 'info',
        title: 'Créer un compte',
        text: 'Vous devez créer un compte pour passer une demande de devis.',
        showCancelButton: true,
        confirmButtonText: 'Créer un compte',
        cancelButtonText: 'Annuler',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirection vers la page de création de compte
          this.route.navigate(['/connexion']);
        }
      });
    } else {
      // Traiter la demande de devis
      this.demande();
    }
  }

}
