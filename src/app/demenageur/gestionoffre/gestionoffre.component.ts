import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-gestionoffre',
  templateUrl: './gestionoffre.component.html',
  styleUrls: ['./gestionoffre.component.css']
})
export class GestionoffreComponent implements OnInit {
  nom_offre:string="";
  prix_offre:string="";
  description_offre:string="";
  userconnect:any
  listoffre:any
  current_offre:any
  offres:any
constructor(private offre:OffreService){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getOffre()

  }
getOffre(){
this.offre.getOffre().subscribe((data) => {
  this.listoffre=data.data;
  console.log('liste des offres', data);
}
)
}
/************Ajout offre*****************/
postOffre(){
  const taboffres={
    nom_offre: this. nom_offre,
    prix_offre: this.prix_offre, 
    description_offre: this.description_offre ,
  }
  this.offre.postOffre(taboffres).subscribe((data) => {
    this.listoffre=data.data;
    console.log('liste des offres', data);
  }
  )
  }
  /************Modifier une offre*********/
  chargerinfoffre(paramoffre:any){
    this.offre=paramoffre;
    this.current_offre=paramoffre.id;

    this.nom_offre=paramoffre.nom_offre;
    this.prix_offre=paramoffre.prix_offre;
    this.description_offre=paramoffre.description_offre;
  }
  putOffre(id:number){
    this.current_offre.nom_offre=this.nom_offre;
    this.current_offre.prix_offre=this.prix_offre;
    this.current_offre.description_offre=this.description_offre;
    
    this.offre.putOffre(id,this.current_offre).subscribe((data)=>{
      console.log('offre modifier',data);
    })
  }
}
