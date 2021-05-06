import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaire/template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { ReactiveFormTpComponent } from './composants/formulaires/reactive-form-tp/reactive-form-tp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StagiaireComponent,
    AdresseComponent,
    ErrorComponent,
    TemplateFormComponent,
    CalculetteComponent,
    ReactiveFormComponent,
    ReactiveFormTpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
