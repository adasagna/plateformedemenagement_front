import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gestionutilisateur',
  templateUrl: './gestionutilisateur.component.html',
  styleUrls: ['./gestionutilisateur.component.css']
})
export class GestionutilisateurComponent implements OnInit {
  listuser:any
  users:any
  constructor(private userservice: UserService){}
  ngOnInit(): void {
    if(!localStorage.getItem("infoUserConnect")){
      localStorage.setItem("infoUserConnect", JSON.stringify("token"));
    }
    this.getAlluser()
  }
  
  getAlluser(){
    this.userservice.getAlluser().subscribe((data) =>{
      this.listuser = data.data;
      console.log('Liste des Utilisateurs',data);
    }
    )
  }
}


