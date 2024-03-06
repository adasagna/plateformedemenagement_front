import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const api = 'http://127.0.0.1:8000/api';


@Injectable({
  providedIn: 'root'
})
export class DemenageurService {

  constructor(private http: HttpClient) { }

  getAllDemenageur(): Observable<any> {
    return this.http.get<any>(`${api}/allmovers`);
  }
  
}
