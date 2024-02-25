import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


const apiUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient) {}

  postDevis(id:number, devisdemenageur:any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.post<any>(`${apiUrl}/devisstore/${id}`, devisdemenageur,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }

  getAllDevis(id:number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${apiUrl}/devisactifofonemover/${id}`,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }

  getDevis(id:number, ): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${apiUrl}/alldevisofonecustomer/${id}`,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }

  /******************details devus d'un client ********************/
  getDetailsdevis(id:number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${apiUrl}/onedevisactifofonecustomer/${id}`,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }
/**les deivis d'un demenageur */
  getDevisdemenageur(id:number, ): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${apiUrl}/alldevisofonemover/${id}`,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }
/*************************Modification d'un devis*********************/
  putDevis(id:number, devisdemenageur:any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.put<any>(`${apiUrl}/devisupdate/${id}`,devisdemenageur, {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }  
  // putValiderDevis(id:number,detailsdevis:any): Observable<any> {
  //   const accessToken = localStorage.getItem('access_token');
  //   return accessToken ?
  //   this.http.put<any>(`${apiUrl}/devisvalidate/${id}`,detailsdevis,{
  //   headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  // }) :
  // of(null);
  // }

}
