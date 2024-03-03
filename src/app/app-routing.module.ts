import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueiladminComponent } from './admin/accueiladmin/accueiladmin.component';
import { GestionarticleComponent } from './admin/gestionarticle/gestionarticle.component';
import { GestionutilisateurComponent } from './admin/gestionutilisateur/gestionutilisateur.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { AccueildemenageurComponent } from './demenageur/accueildemenageur/accueildemenageur.component';
import { GestiondevisComponent } from './demenageur/gestiondevis/gestiondevis.component';
import { GestionoffreComponent } from './demenageur/gestionoffre/gestionoffre.component';
import { AccueilutilisateurComponent } from './Utilisteur/accueilutilisateur/accueilutilisateur.component';
import { AproposComponent } from './Utilisteur/apropos/apropos.component';
import { ConditionutilisationComponent } from './Utilisteur/conditionutilisation/conditionutilisation.component';
import { PolitiqueconfidentialiteComponent } from './Utilisteur/politiqueconfidentialite/politiqueconfidentialite.component';
import { ContactComponent } from './Utilisteur/contact/contact.component';
import { ListedevisComponent } from './client/listedevis/listedevis.component';
import { ServiceComponent } from './Utilisteur/service/service.component';
import { AccueilclientComponent } from './client/accueilclient/accueilclient.component';
import { GestioncompteComponent } from './client/gestioncompte/gestioncompte.component';
import { GestiondemandeComponent } from './client/gestiondemande/gestiondemande.component';
import { GestionprofilComponent } from './demenageur/gestionprofil/gestionprofil.component';
import { DevisdemenageurComponent } from './demenageur/devisdemenageur/devisdemenageur.component';
import { ArticlesComponent } from './Utilisteur/articles/articles.component';
import { PestationComponent } from './client/pestation/pestation.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'accueilutilisateur', pathMatch: 'full' },
  {path: 'connexion', component: ConnexionComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'accueildemenageur', component: AccueildemenageurComponent},
  {path: 'gestionarticle', component: GestionarticleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'conditionutilisation', component: ConditionutilisationComponent},
  {path: 'gestionoffre', component: GestionoffreComponent},
  {path: 'gestionutilisateur', component: GestionutilisateurComponent},
  {path: 'gestiondevis', component: GestiondevisComponent},
  {path: 'accueiladmin', component: AccueiladminComponent, canActivate: [ authGuard]},
  {path: 'politiqueconfidentialite', component: PolitiqueconfidentialiteComponent},
  {path: 'accueilutilisateur', component: AccueilutilisateurComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'accueilclient', component: AccueilclientComponent},
  {path: 'gestioncompte', component: GestioncompteComponent},
  {path: 'gestiondemande', component: GestiondemandeComponent},
  {path: 'gestionprofil', component: GestionprofilComponent},
  {path: 'listedevis', component:ListedevisComponent},
  {path: 'devisdemenageur', component:DevisdemenageurComponent},
  {path: 'prestation', component:PestationComponent},
  {path: 'articles', component:ArticlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
