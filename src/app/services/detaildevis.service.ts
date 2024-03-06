import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
const apiUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class DetaildevisService {

  constructor(private http: HttpClient) { }

  /******************details devus d'un client ********************/
  // getDetailsdevis(id:number): Observable<any> {
  //   const accessToken = localStorage.getItem('access_token');
  //   return accessToken ?
  //   this.http.get<any>(`${apiUrl}/onedevisactifofonecustomer/${id}`,{
  //   headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  // }) :
  // of(null);
  // }
}
