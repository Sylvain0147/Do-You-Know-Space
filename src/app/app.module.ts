import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageMenuQuizComponent } from './page-menu-quiz/page-menu-quiz.component';
import { PageQuestionComponent } from './page-question/page-question.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { LandingComponent } from './landing/landing.component';
import { AccueilDocComponent} from './accueil-doc/accueil-doc.component';
import { DocArticleComponent } from './doc-article/doc-article.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageMenuQuizComponent,
    AccueilDocComponent,
    PageQuestionComponent,
    PageContactComponent,
    LandingComponent,
    DocArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: "landing", component: LandingComponent, pathMatch: "full"}, 
        { path: "menuQuiz", component: PageMenuQuizComponent, pathMatch: "full" },
        { path: "accueilDoc", component: AccueilDocComponent, pathMatch: "full"},
        { path: "contact", component: PageContactComponent, pathMatch: "full"},
        { path: "", redirectTo: "landing", pathMatch: "full"}
      ],

      {useHash: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
