import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
const api = 'http://127.0.0.1:8000/api';


@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  constructor(private http: HttpClient) { }
  /*******lister les prestation */
  getprestation(id:number): Observable<any> {

    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${api}/prestationactifofonecustomer/ ${id}`, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);
  
  }
/***********commenter une prestation*************/
putprestation(id:number, prest:any): Observable<any> {

  const accessToken = localStorage.getItem('access_token');
  return accessToken ?
  this.http.put<any>(`${api}/commentprestsend/ ${id}`, prest, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) :
    of(null);

}

}
