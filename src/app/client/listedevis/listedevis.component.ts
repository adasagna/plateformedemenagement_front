import { Component, OnInit } from '@angular/core';
import { DevisService } from 'src/app/services/devis.service';
import { ValiderService } from 'src/app/services/valider.service';

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
  dvis:any
  details_id:any
  constructor(private devisservice: DevisService, private valider :ValiderService){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getDevis(this.userconnect.id)
    this.getDetailsdevis(this.userconnect.id)
    
  }


/**liste des devis d'un client */
  getDevis(id:number){
    this.devisservice.getDevis(id).subscribe((data) => {
      this.listedevis=data.data;
      console.log('listedevisdddyyyyuyuuu',data);
    }
      )
  }
/**Details devis d'un client */
  getDetailsdevis(paramdetails:any){
    alert(paramdetails)
    this.details_id=paramdetails
    this.detailsdevis=paramdetails
    // alert('voir devis')
    this.devisservice.getDetailsdevis(this.detailsdevis).subscribe((data)=>{
      console.log('details du devis',data); 
      this.listedevis=data.data;
    });
  }
  /**************************valider un devis************************ */
  putValiderDevis(id:number){
    alert(this.details_id);
    this.valider.putValiderDevis(this.details_id).subscribe((data)=>{
      // this.listedevis=data.data;
      console.log('devis validertttyyuuuiiiio',data);

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
}
