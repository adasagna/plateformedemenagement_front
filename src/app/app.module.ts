import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionutilisateurComponent } from './admin/gestionutilisateur/gestionutilisateur.component';
import { GestionarticleComponent } from './admin/gestionarticle/gestionarticle.component';
import { ServiceComponent } from './Utilisteur/service/service.component';
import { ContactComponent } from './Utilisteur/contact/contact.component';
import { AproposComponent } from './Utilisteur/apropos/apropos.component';
import { ArticlesComponent } from './Utilisteur/articles/articles.component';
import { PolitiqueconfidentialiteComponent } from './Utilisteur/politiqueconfidentialite/politiqueconfidentialite.component';
import { ConditionutilisationComponent } from './Utilisteur/conditionutilisation/conditionutilisation.component';
import { HeaderComponent } from './header_footer/header/header.component';
import { FooterComponent } from './header_footer/footer/footer.component';
import { AccueilutilisateurComponent } from './Utilisteur/accueilutilisateur/accueilutilisateur.component';
import { AccueildemenageurComponent } from './demenageur/accueildemenageur/accueildemenageur.component';
import { AccueiladminComponent } from './admin/accueiladmin/accueiladmin.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { AccueilclientComponent } from './client/accueilclient/accueilclient.component';
import { AuthServiceService } from './services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GestioncompteComponent } from './client/gestioncompte/gestioncompte.component';
import { GestiondemandeComponent } from './client/gestiondemande/gestiondemande.component';
import { ListedevisComponent } from './demenageur/listedevis/listedevis.component';
import { GestionoffreComponent } from './demenageur/gestionoffre/gestionoffre.component';
import { GestiondevisComponent } from './demenageur/gestiondevis/gestiondevis.component';
import { GestionprofilComponent } from './demenageur/gestionprofil/gestionprofil.component';
import { TokenInterceptorProvider } from './intercepteur/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GestionutilisateurComponent,
    GestionarticleComponent,
    GestiondevisComponent,
    ServiceComponent,
    ContactComponent,
    AproposComponent,
    ArticlesComponent,
    PolitiqueconfidentialiteComponent,
    ConditionutilisationComponent,
    HeaderComponent,
    FooterComponent,
    AccueilutilisateurComponent,
    AccueildemenageurComponent,
    AccueiladminComponent,
    InscriptionComponent,
    ConnexionComponent,
    AccueilclientComponent,
    GestioncompteComponent,
    GestiondemandeComponent,
    ListedevisComponent,
    GestionoffreComponent,
    GestionprofilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthServiceService, TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
