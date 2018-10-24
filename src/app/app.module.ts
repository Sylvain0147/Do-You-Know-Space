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
import { HighScoresComponent } from './high-scores/high-scores.component';
import { CGUComponent } from './cgu/cgu.component';
import { LegalMentionComponent } from './legal-mention/legal-mention.component';
import { MenuQuizThemeComponent } from './menu-quiz-theme/menu-quiz-theme.component';
import { QuizDirective } from './quiz.directive';
import { MarsDocComponent } from './mars-doc/mars-doc.component';
import { MercuryDocComponent } from './mercury-doc/mercury-doc.component';
import { VenusDocComponent } from './venus-doc/venus-doc.component';
import { JupiterDocComponent } from './jupiter-doc/jupiter-doc.component';
import { SaturnDocComponent } from './saturn-doc/saturn-doc.component';
import { UranusDocComponent } from './uranus-doc/uranus-doc.component';
import { NeptuneDocComponent } from './neptune-doc/neptune-doc.component';
import { SunDocComponent } from './sun-doc/sun-doc.component';
import { ConstellationsDocComponent } from './constellations-doc/constellations-doc.component';
import { AsteroidsDocComponent } from './asteroids-doc/asteroids-doc.component';
import { ExoplanetsDocComponent } from './exoplanets-doc/exoplanets-doc.component';
import { NasaService } from './nasa.service';
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
    DocArticleComponent,
    HighScoresComponent,
    CGUComponent,
    LegalMentionComponent,
    MenuQuizThemeComponent,
    QuizDirective,
    MarsDocComponent,
    MercuryDocComponent,
    VenusDocComponent,
    JupiterDocComponent,
    SaturnDocComponent,
    UranusDocComponent,
    NeptuneDocComponent,
    SunDocComponent,
    ConstellationsDocComponent,
    AsteroidsDocComponent,
    ExoplanetsDocComponent
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
        { path: "cgu", component: CGUComponent, pathMatch: "full"},
        { path: "legalMentions", component: LegalMentionComponent, pathMatch: "full"},
        { path: "pageQuestion", component: PageQuestionComponent, pathMatch: "full"},
        { path: "highScore", component: HighScoresComponent, pathMatch: "full"},
        { path: "menuTheme", component: MenuQuizThemeComponent, pathMatch: "full"},
        { path: "mercuryDoc", component: MercuryDocComponent, pathMatch: "full"},
        { path: "venusDoc", component: VenusDocComponent, pathMatch: "full"},
        { path: "marsDoc", component: MarsDocComponent, pathMatch: "full"},
        { path: "jupiterDoc", component: JupiterDocComponent, pathMatch: "full"},
        { path: "saturnDoc", component: SaturnDocComponent, pathMatch: "full"},
        { path: "uranusDoc", component: UranusDocComponent, pathMatch: "full"},
        { path: "neptuneDoc", component: NeptuneDocComponent, pathMatch: "full"},
        { path: "docArticle", component: DocArticleComponent, pathMatch: "full"},
        { path: "sunDoc", component: SunDocComponent, pathMatch: "full"},
        { path: "constellationsDoc", component: ConstellationsDocComponent, pathMatch: "full"},
        { path: "exoplanetsDoc", component: ExoplanetsDocComponent, pathMatch: "full"},
        { path: "asteroidsDoc", component: AsteroidsDocComponent, pathMatch: "full"},
        { path: "", redirectTo: "landing", pathMatch: "full"}

        
      ],

      {useHash: true}
    )
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
