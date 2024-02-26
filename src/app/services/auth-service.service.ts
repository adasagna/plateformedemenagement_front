import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const api = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  Signup: any;

  constructor(private http: HttpClient) { }

  // singin(data: any): Observable<any> {
  //   return this.http.post<any>(`${api}/register`, data);
  // }

  singin(data: any): Observable<any> {

    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.post<any>(`${api}/register `, data ,{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);
  
  }
  

  connexion(data:any):Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return   this.http.post<any>(`${api}/login`, data,{
      headers: new HttpHeaders({'Authorization': `Bearer ${accessToken}`})
    })
    of();
    }

 
/********************Deconnexion*****************************/

    logout(): Observable<any> {
      const accessToken = localStorage.getItem('access_token');
      localStorage.removeItem('access_token');
      return accessToken ?
        this.http.post<any>(`${api}/logout`, {}, {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) :
        of(null);
    }
  
  }

