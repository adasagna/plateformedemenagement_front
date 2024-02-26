import { Component } from '@angular/core';

@Component({
  selector: 'app-accueilutilisateur',
  templateUrl: './accueilutilisateur.component.html',
  styleUrls: ['./accueilutilisateur.component.css'],
})
export class AccueilutilisateurComponent {
  Showservice:boolean=true
  Showaccueil(){
    this.Showservice =!this.Showservice
  }

}
