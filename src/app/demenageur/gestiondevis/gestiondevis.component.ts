import { Component, OnInit } from '@angular/core';
import { DemandedevisService } from 'src/app/services/demandedevis.service';
import { DemanderecuService } from 'src/app/services/demanderecu.service';
import { DetaildemandeService } from 'src/app/services/detaildemande.service';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-gestiondevis',
  templateUrl: './gestiondevis.component.html',
  styleUrls: ['./gestiondevis.component.css']
})
export class GestiondevisComponent implements OnInit {
  listeDemandedevis: any[] = [];
  listeDemanderecus: any[] = [];
  detail: any[] = [];
  listedevis:any[] =[];
  id: any;
  userconnect:any
  demandedevis: any;
  demandedevis_id: any;
  constructor (private demanderecu: DemanderecuService, demandedevis:DemandedevisService, private details:DetaildemandeService, private devis:DevisService){}
  Showdevis:boolean=true
  
  nom_entreprise: string="";
  adresse_actuelle: string="";
  nouvelle_adresse: string="";
  information_bagage: string="";
  date_demenagement: string="";
  description:string="";
  prix_total:string="";
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getAllDemanderecu(this.userconnect.id)
    this.getAllDetails(this.id)
    this.getAllDevis(this.userconnect.id)
  }
 
  GenereDevis(paramid:any){
    this.Showdevis=!this.Showdevis;
    alert(paramid);
    this.demandedevis=paramid;
    console.log(this.demandedevis, "fghfdgvg23");
    
  }

  getAllDemanderecu(id:number) {
    this.demanderecu.getAllDemanderecu(id).subscribe(
      (data) => {
        this.listeDemanderecus = data.data;
       console.log("liste de la reponse",this.listeDemanderecus)
      }
      
    )
  }

  annocesfound:any;
  annonce_id:any;
  getAllDetails(id:number){

    let foundannonces  = this.listeDemanderecus.find((annonce:any)=> annonce.id=== id);
    if(foundannonces){ 
      console.log("annonce trouve ",foundannonces);
      this.annocesfound = foundannonces;
    }else{
      console.log("annonces non trouve");
    }
 
  }

  postDevis(){
    const tabdevis={
      prix_total: this.prix_total, 
      date_demenagement: this.date_demenagement,
      description: this.description ,
    }
    this.devis.postDevis(this.demandedevis, tabdevis).subscribe(
      (data)=>{ 
      console.log(' devis envoyé avec succès au client:', data); 
      alert('devis envoyé')
    },
    
    )
        
}

getAllDevis(id:number){
  this.devis.getAllDevis(id).subscribe((data) => {
    this.listedevis=data.data;
    console.log('gysgygcydogcy',this.listedevis);
  }
    )
}
}
