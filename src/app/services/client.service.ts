import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<any> {
    return this.http.get<any>(`${api}'/allcustomers`);
  }

}
