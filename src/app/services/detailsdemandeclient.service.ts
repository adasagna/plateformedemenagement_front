import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const apiUrl = 'http://127.0.0.1:8000/api';


@Injectable({
  providedIn: 'root'
})
export class DetailsdemandeclientService {

  constructor(private http: HttpClient) {}
  
/**details d'une demande de devis specifique d'un client */
  getAlldetailsdemandeclient(id:number): Observable<any> {

    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
    this.http.get<any>(`${apiUrl}/onedemandedevisofonecustomer/${id}`, {
      
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);

  }
}
