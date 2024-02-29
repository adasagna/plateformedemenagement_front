import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

const apiUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}
  /****Lister les articles  */
  ListeArticle(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.get<any>(`${apiUrl}/articlepost`,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }

  /****Ajouter article*******/
  AjoutArticle(articles:any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.post<any>(`${apiUrl}/storearticle`,articles,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }
  /*******Modifier un articlr**********/
  ModifierArticle(id:number,articles:any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.put<any>(`${apiUrl}/editarticle/${id}`,articles,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }

  DesactiverArticle(id:number,articles:any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ?
    this.http.put<any>(`${apiUrl}/desactivatearticle/${id}`,articles,{
    headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
  }) :
  of(null);
  }
}
