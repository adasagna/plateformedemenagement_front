import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-gestionarticle',
  templateUrl: './gestionarticle.component.html',
  styleUrls: ['./gestionarticle.component.css']
})
export class GestionarticleComponent {
  constructor(private article:ArticleService){}
  getAllArticle(){
    this.article.getAllArticle().subscribe
   }

}
