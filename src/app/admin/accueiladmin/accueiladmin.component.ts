import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.component.html',
  styleUrls: ['./accueiladmin.component.css']
})
export class AccueiladminComponent implements OnInit {
  constructor( private client: ClientService, private userservice:UserService){}

  clients: user[]=[];
  ngOnInit(): void {
   this. getAllClient()
  }
  // listeClients: any[] = [];
  getAllClient(){
    this.client.getAllClient().subscribe(
      (response)=>{
        this.clients = response.data;
        console.log(this.clients);
      }
      )
    }
    
}
