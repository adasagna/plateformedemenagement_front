import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    // Récupérer le token JWT depuis le service d'authentification
    const token = localStorage.getItem('token');

    // Cloner la requête et ajouter le token JWT aux en-têtes de la requête clonée
    if (token) {
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Utilisation de backticks pour inclure la variable dans la chaîne
        }
      });
      console.log(clonedRequest);

      return next.handle(clonedRequest);
    } else {
      // Si aucun token n'est disponible, simplement poursuivre la requête d'origine
      return next.handle(request);
    }
  }
}

// Définir le fournisseur pour l'intercepteur
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};
