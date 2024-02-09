import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  usernameError: boolean = true;
  emailError: boolean = true;
  passwordError: boolean = true;
  passConfirm: boolean = true;
  
  constructor(private router: Router) {}

  focusInput(inputType: string): void {
    // Fonction pour gérer l'effet de focus sur les étiquettes
    // ...

    // Exemple :
    console.log(`Input type ${inputType} focused.`);
  }

  blurInput(inputType: string): void {
    // Fonction pour gérer l'effet de blur sur les étiquettes et la validation du formulaire
    // ...

    // Exemple :
    console.log(`Input type ${inputType} blurred.`);
  }

  switchForm(e: Event): void {
    // Fonction pour gérer le changement de formulaire
    // ...
    this.router.navigate(['/connexion']);
    // Exemple :
    console.log('Form switched.');
  }

  submitForm(): void {
    // Fonction pour gérer la soumission du formulaire
    // ...

    // Exemple :
    console.log('Form submitted.');
  }

  reloadPage(): void {
    // Fonction pour recharger la page
    // ...

    // Exemple :
    console.log('Page reloaded.');
  }
}
