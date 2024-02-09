import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const api = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class InfosupService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {

  const accessToken = localStorage.getItem('access_token');
  return accessToken ?
  this.http.get<any>(`${api}/allinformationsSuppOfMovers`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) :
    of(null);

}
}



  // getInfo(id:number): Observable<any> {
  //   return this.http.get<any>(`${api}/allinfosuppofonemover/${id}`);
  // }}
