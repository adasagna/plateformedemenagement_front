import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const apiUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ValiderService {

  constructor(private http: HttpClient) { }
/*******Valider un devis***********/
  putValiderDevis(id:number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    console.log(accessToken);
    
    return accessToken ?
    this.http.put<any>(`${apiUrl}/devisvalidate/${id}`, {},{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }
}
