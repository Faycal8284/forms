import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaire/template-form/template-form.component';
import { ReactiveFormTpComponent } from './composants/formulaires/reactive-form-tp/reactive-form-tp.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';

const routes: Routes = [
  //localhost:4200/
  { path: 'home', component: HomeComponent },

  //localhost:4200/stagiaire
  { path: 'stagiaire', component: StagiaireComponent },
 
  //localhost:4200/calculette
  { path: 'calculette', component: CalculetteComponent },
  
  //localhost:4200/stagiaire/John/Doe
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },

  //localhost:4200/adresse
  { path: 'adresse', component: AdresseComponent },
  { path: 'adresse/:numero/:nomderue/:ville', component: AdresseComponent },
 
  //localhost:4200/template-form
  { path: 'template-form', component: TemplateFormComponent },
 
  //localhost:4200/reactive-form
  { path: 'reactive-form', component: ReactiveFormComponent },

   //localhost:4200/reactive-formTp
   { path: 'reactive-form-Tp', component:ReactiveFormTpComponent},

  { path: 'error', component: ErrorComponent },

  //pathmatch= full signifie que tout chemin d'url doit corresspondre
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  // enable tracing permet de garder dans la console tous les chemin utilisé avant

  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
