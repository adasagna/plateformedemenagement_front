import { Component, OnInit } from '@angular/core';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-listedevis',
  templateUrl: './listedevis.component.html',
  styleUrls: ['./listedevis.component.css']
})
export class ListedevisComponent implements OnInit {
  userconnect:any
  listedevis:any
  constructor(private devis: DevisService){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getDevis(this.userconnect.id)
  }



  getDevis(id:number){
    this.devis.getDevis(id).subscribe((data) => {
      this.listedevis=data.data;
      console.log('gysgygcydogcy',data);
    }
      )
  }

}
