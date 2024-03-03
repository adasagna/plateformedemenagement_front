import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-gestionarticle',
  templateUrl: './gestionarticle.component.html',
  styleUrls: ['./gestionarticle.component.css']
})
export class GestionarticleComponent implements OnInit{
  titre: string="";
  contenu: string="";

  listarticle:any
  articles:any
  Currentarticle:any
  current_id:any
  constructor(private articleservice:ArticleService,private authservice:AuthServiceService, private route:Router){}
  ngOnInit(): void {
    if(!localStorage.getItem("infoUserConnect")){
      localStorage.setItem("infoUserConnect", JSON.stringify("token"));
    }
    this.ListeArticle()
  }
  ListeArticle(){
    this.articleservice.ListeArticle().subscribe((data)=>{
      this.listarticle=data.data;
      console.log('liste des articles', data);
    })
   }

   /**********Ajouter un Article**********/
   AjoutArticle(){
    const tabarticles={
      titre:this.titre,
      contenu:this.contenu
    }
    this.articleservice.AjoutArticle(tabarticles).subscribe((data)=>{
      this.listarticle=data.data;
      console.log('liste des articles', data);
    })
   }
   /*********Modifier un Article********/
   ChargeinfoArticle(paramarticles:any){
    alert(paramarticles);
    this.articles=paramarticles
    this.current_id=paramarticles.id;
    this.Currentarticle=paramarticles

    this.titre=paramarticles.titre,
    this.contenu=paramarticles.contenu

   }

   ModifierArticle(){
    this.Currentarticle.titre=this.titre,
    this.Currentarticle.contenu=this.contenu

    this.articleservice.ModifierArticle(this.current_id,this.Currentarticle).subscribe((data) =>{
      console.log('article modifier',data);
    }
    )
   }
   /*********Desactiver un Article********/
   DesactiverArticle(id:number){
    // Afficher le SweetAlert pour demander confirmation
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir désactiver cet article ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#02273D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, désactiver',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur clique sur "Oui, désactiver", appeler la méthode de désactivation
        this.articleservice.DesactiverArticle(id, this.articles).subscribe((data) => {
          console.log('article désactivé', data);
          // Afficher un message de succès après avoir désactivé l'article
          Swal.fire(
            'Article désactivé !',
            'L\'article a été désactivé avec succès.',
            'success'
          );
        }, (error) => {
          // En cas d'erreur, afficher un message d'erreur
          console.error('Erreur lors de la désactivation de l\'article :', error);
          Swal.fire(
            'Erreur',
            'Une erreur est survenue lors de la désactivation de l\'article.',
            'error'
          );
        });
      }
    });
  }
  /************Deconnexion**************/
  logout(){
    this.authservice.logout().subscribe((response) => {
      console.log('utilisateur deconnecté', response);
      this.route.navigate(['/connexion']);
    
    })
    }
  }

