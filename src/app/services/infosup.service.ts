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
  this.http.get<any>(`${api}/allinformationsuppofallmover`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) :
    of(null);

}

postInfo(info:any): Observable<any> {

  const accessToken = localStorage.getItem('access_token');
  return accessToken ?
  this.http.post<any>(`${api}/infosupstore`, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}`,info })
    }) :
    of(null);

}  
}



  // getInfo(): Observable<any> {
  //   return this.http.get<any>(`${api}/allinformationsuppofallmover/`);
  // }}
