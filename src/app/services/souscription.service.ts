import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const api = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {

  constructor(private http: HttpClient) { }

  /*******Souscrire à une offre**********/

  Souscriptione(id:number,offre:any): Observable<any> {

    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.post<any>(`${api}/souscriptionstore/ ${id}`, offre,{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);
  
  }
}
