// accueildemenageur.component.ts

import { Component, OnInit } from '@angular/core';
import { info } from 'src/app/models/informations';
  import { user } from 'src/app/models/user';
import { DemanderecuService } from 'src/app/services/demanderecu.service';
import { InfosupService } from 'src/app/services/infosup.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-accueildemenageur',
  templateUrl: './accueildemenageur.component.html',
  styleUrls: ['./accueildemenageur.component.css']
})
export class AccueildemenageurComponent implements OnInit {
  listeDemanderecus:any;
  demenageurs: user[] = [];
  listinfo: info[] = [];
  name: string = "";
  localite: string = "";
  email: string = "";
  role: string = "";
  id:number=0
  
informationssup:info[]=[];
  userconnect: any
  constructor(private userService: UserService, private info:InfosupService, private demanderecu:DemanderecuService) {}

  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getDemenageurs();  
    this.getInfo();
  }

  getDemenageurs(): void {
    this.userService.getUsers().subscribe(
      (data: user[]) => {
        this.demenageurs = data;
        console.log(this.demenageurs);
      },
      // (error) => {
      //   console.error('Erreur lors de la récupération des demenageurs', error);
      // }
    );
  }


  
  getInfo(){
    this.userService.getUsers().subscribe((data:user[])=> {
      this.demenageurs = data;
      console.warn(this.listinfo );
     
    
}
    )
}



}
