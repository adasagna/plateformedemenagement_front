import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

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
  currentoffre:any
  offres:any
  current_id:any
constructor(private offreservice:OffreService,private authservice:AuthServiceService, private route:Router){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getOffre()

  }
getOffre(){
this.offreservice.getOffre().subscribe((data) => {
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
  this.offreservice.postOffre(taboffres).subscribe((data) => {
    this.listoffre=data.data;
    console.log('liste des offres', data);
  }
  )
  }
  /************Modifier une offre*********/
  chargerinfoffre(paramoffre:any){
    this.offres=paramoffre;
    this.current_id=paramoffre.id;
    this.currentoffre=paramoffre;

    this.nom_offre=paramoffre.nom_offre;
    this.prix_offre=paramoffre.prix_offre;
    this.description_offre=paramoffre.description_offre;
  }
  modifierOffre(){
    this.currentoffre.nom_offre=this.nom_offre;
    this.currentoffre.prix_offre=this.prix_offre;
    this.currentoffre.description_offre=this.description_offre;
    
    this.offreservice.putOffre(this.current_id, this.currentoffre).subscribe((data)=>{
      console.log('offre modifier',data);
    })

    Swal.fire({
      title: 'Modification offre',
      text:'Offre Modifiée',
      icon: 'success',
      timer: 3000, // Auto-fermeture après 3 secondes
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
  /*****Deconnexion*********/
  logout(){
    this.authservice.logout().subscribe((response) => {
      console.log('utilisateur deconnecté', response);
      this.route.navigate(['/connexion']);
    
    })
    }
}
