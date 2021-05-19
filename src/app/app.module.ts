import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneEditComponent } from './composants/personne/personne-edit/personne-edit.component';
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './composants/materials/table/table.component';
import { TreeComponent } from './composants/materials/tree/tree.component';
import { AuthComponent } from './composants/auth/auth.component';
import { RegisterComponent } from './composants/register/register.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { FeatureCardComponent } from './composants/interactions/feature-card/feature-card.component';
import { FeaturesComponent } from './composants/interactions/features/features.component';
import { DeveloperComponent } from './composants/interactions/exercices/developer/developer.component';
import { SkillComponent } from './composants/interactions/exercices/skill/skill.component';

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
    ReactiveFormTpComponent,
    PersonneComponent,
    PersonneDetailsComponent,
    PersonneEditComponent,
    AddressFormComponent,
    TableComponent,
    TreeComponent,
    AuthComponent,
    RegisterComponent,
    ProfileComponent,
    FeatureCardComponent,
    FeaturesComponent,
    DeveloperComponent,
    SkillComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapModule,
    BrowserAnimationsModule,
    MaterialModule,    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){

    console.log("App-module");

  }
}
