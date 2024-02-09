import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionprofil',
  templateUrl: './gestionprofil.component.html',
  styleUrls: ['./gestionprofil.component.css']
})
export class GestionprofilComponent {
  Showinformation:boolean=true

  Showinfosup(){
    this.Showinformation=!this.Showinformation
  }

}
