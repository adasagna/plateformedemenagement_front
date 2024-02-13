import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const apiUrl = 'http://127.0.0.1:8000/api';
@Injectable({
  providedIn: 'root'
})
export class DemanderecuService {

  constructor(private http: HttpClient) {}

  // Envoi d'une demande de devis
  getAllDemanderecu(id:number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${apiUrl}/alldemandedevislistofonemover/${id}`,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }
}
