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
  constructor(private devisservice: DevisService, private valider :ValiderService){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getDevis(this.userconnect.id)
    this.getDetailsdevis(this.dvis.id)
  }


/**liste des devis d'un client */
  getDevis(id:number){
    this.devisservice.getDevis(id).subscribe((data) => {
      this.listedevis=data.data;
      console.log('listedevis',data);
    }
      )
  }
/**Details devis d'un client */
  getDetailsdevis(paramdetails:any){
    alert(paramdetails)
    this.detailsdevis=paramdetails
    alert('voir devis')
    this.devisservice.getDetailsdevis(this.detailsdevis).subscribe((reponse:any)=>{
      console.log('details du devis',reponse); 
      this.listedevis=reponse.data;
    });
  }
  /**************************valider un devis************************ */
  putValiderDevis(id:number){
    this.valider.putValiderDevis(id).subscribe((data)=>{
      this.listedevis=data.data;
      console.log('devis validertttyyuuuiiiio',data);

    })
  }
}
