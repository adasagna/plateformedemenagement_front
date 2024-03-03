import { Component, OnInit } from '@angular/core';
import { DevisService } from 'src/app/services/devis.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-devisdemenageur',
  templateUrl: './devisdemenageur.component.html',
  styleUrls: ['./devisdemenageur.component.css']
})
export class DevisdemenageurComponent implements OnInit {
constructor(private devisservice:DevisService, private authservice:AuthServiceService, private route:Router){}
prix_total: string = "";
description: string = "";

  userconnect:any;
  listedevis:any;
  currentDevis:any;
  devis:any;
  current_id!:number
ngOnInit(): void {
  this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    console.log (this.userconnect.id, 'demenageur')
    this.getDevisdemenageur(this.userconnect.id)
  }
getDevisdemenageur(id:number){
  this.devisservice.getDevisdemenageur(id).subscribe((data) => {
    this.listedevis = data.data;
    console.log('liste des devis', this.listedevis)
}
  );
}

ChangerDevis(paramDevis:any){
  alert(paramDevis)
 this.devis=paramDevis;
 this.current_id=paramDevis.id;
 this.currentDevis = paramDevis;

  this.prix_total = paramDevis.prix_total;
  this.description = paramDevis.description;  
}
putDevis(){
  this.currentDevis.prix_total = this.prix_total;
  this.currentDevis.description = this.description;

  this.devisservice.putDevis(this.current_id, this.currentDevis).subscribe((data)=>{
    console.log(data);
  }
  )
}
/****************desactiver un devis*********/

putDesactiverdevis(id:number){
  this.devisservice.putDesactiverdevis(id, this.devis).subscribe((data)=>{
    console.log( 'devis desactiver',data);
  }
  )
}
/********Deconnesion*************/
logout(){
  this.authservice.logout().subscribe((response) => {
    console.log('utilisateur deconnecté', response);
    this.route.navigate(['/connexion']);
  
  })
  }
}
