import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<any> {
    // Vous devrez ajuster l'URL et le format de la réponse en fonction de votre API
    return this.http.get<any>(`${apiUrl}//alluseractif`);
  }
}
