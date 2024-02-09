import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Demande } from '../models/demande.model';

const apiUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class DemandedevisService {
  constructor(private http: HttpClient) {}

  // Envoi d'une demande de devis
  postDemandeDevis(id:number, demandeclient:any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.post<any>(`${apiUrl}/demandedevisstore/${id}`,demandeclient,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }

  // Obtenir la liste de toutes les demandes de devis actives du client
  getAllDemandeDevis(id:number): Observable<any> {

    const accessToken = localStorage.getItem('access_token');

    return accessToken ?
    this.http.get<any>(`${apiUrl}/alldemandedevisactifofcustomer/${id}`, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);

  }

  // Ajoutez d'autres méthodes au besoin
}
