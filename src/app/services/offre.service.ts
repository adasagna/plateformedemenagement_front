import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
const api = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) { }
  /**********Listes des offres d'un demenageur */
  getOffre(): Observable<any> {

    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${api}/allactifsoffers/`, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);
  
  }
/********Ajout Offre**********/
  postOffre(offre:any): Observable<any> {

    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.post<any>(`${api}/offrestore/`, offre,{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);
  
  }
/*************Modifier un offre*************/
putOffre(id:number,offre:any): Observable<any> {

  const accessToken = localStorage.getItem('access_token');
  return accessToken ?
  this.http.put<any>(`${api}/offrestore/ ${id}`, offre,{
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) :
    of(null);

}
}
