import { Component, OnInit } from '@angular/core';
import { DevisService } from 'src/app/services/devis.service';
import { ValiderService } from 'src/app/services/valider.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DetaildevisService } from 'src/app/services/detaildevis.service';



@Component({
  selector: 'app-listedevis',
  templateUrl: './listedevis.component.html',
  styleUrls: ['./listedevis.component.css']
})
export class ListedevisComponent implements OnInit {
  userconnect:any
  listedevis:any
  tabdevis:any
  detailsdevis:any
  devis:any
  details_id:any
  prix_total=0;
  description:string=""
  constructor(private devisservice: DevisService, private valider :ValiderService,private authservice:AuthServiceService, private route:Router,
    private detailsservice:DetaildevisService){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getDevis(this.userconnect.id);
    // this.getDetailsdevis(this.userconnect.id)
    
  }


/**liste des devis d'un client */
  getDevis(id:number){
    this.devisservice.getDevis(id).subscribe((data) => {
      this.listedevis=data.data;
      // console.log('listedevisdddyyyyuyuuu',li);
    }
      )
  }
/**Details devis d'un client */
  unDevis: any;
  getDetailsdevis(paramdetails:number){

    // this.detailsdevis=paramdetails
    // alert('voir devis')
    this.devisservice.getDetailsdevis(paramdetails).subscribe((data)=>{
      // console.log('details du devis dddddddddddd',data.data); 
      this.unDevis=data.data;
      console.log(this.unDevis)
    });
  }
  /**************************valider un devis************************ */
  putValiderDevis(id:number){
    console.log(id)

    this.valider.putValiderDevis(id).subscribe((data)=>{
      console.log('devis validertttyyuuuiiiio',data);
      // this.listedevis=data.data;

    })
  }
  /*********refus devis************************/
  postrefuDevis(id:number){
    this.devisservice.postrefuDevis(id).subscribe((data) =>{
      this.detailsdevis=data.data;
      console.log('devis refusé', data);

    }
    )
  }
  logout(){
    this.authservice.logout().subscribe((response) => {
      console.log('utilisateur deconnecté', response);
      this.route.navigate(['/connexion']);
    
    })
    }
}
