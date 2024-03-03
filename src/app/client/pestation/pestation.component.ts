import { Component, OnInit } from '@angular/core';
import { PrestationService } from 'src/app/services/prestation.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-pestation',
  templateUrl: './pestation.component.html',
  styleUrls: ['./pestation.component.css']
})
export class PestationComponent implements OnInit{
  contenu: string="";
  
  userconnect:any
  listprestations:any
  prestation:any
  constructor(private prestationservice: PrestationService,private authservice:AuthServiceService, private route:Router){}
  ngOnInit(): void {
    this.userconnect = JSON.parse(localStorage.getItem('infoUserConnect') || '');
    this.getprestation(this.userconnect.id);
  }
  getprestation(id:number){
    this.prestationservice.getprestation(id).subscribe((data) =>{
      this.listprestations = data.data;
      console.log('liste des prestations', data);
    })
  }

  /**********Commenter une prestation*******************/
  comment(paramid :any){
    alert(paramid)
    this.prestation=paramid;
    
   
  }

  putprestation(id:number){
    const tabcomment={
      contenu:this.contenu,

    }
    this.prestationservice.putprestation(this.prestation, tabcomment).subscribe((data) =>{
      // this.listprestations = data.data;
      console.log('liste des prestations', data);
    })
  }
  /********Decoonexion*********/
  logout(){
    this.authservice.logout().subscribe((response) => {
      console.log('utilisateur deconnecté', response);
      this.route.navigate(['/connexion']);
    
    })
    }
}
