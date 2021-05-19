import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { AuthComponent } from './composants/auth/auth.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaire/template-form/template-form.component';
import { ReactiveFormTpComponent } from './composants/formulaires/reactive-form-tp/reactive-form-tp.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { HomeComponent } from './composants/home/home.component';
import { DeveloperComponent } from './composants/interactions/exercices/developer/developer.component';
import { FeaturesComponent } from './composants/interactions/features/features.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { TableComponent } from './composants/materials/table/table.component';
import { TreeComponent } from './composants/materials/tree/tree.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { RegisterComponent } from './composants/register/register.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AuthGuard } from './guards/auth.guard';
import { LeaveGuard } from './guards/leave.guard';
import { CamionComponent } from './module/vehicule/camion/camion.component';
import { VoitureComponent } from './module/vehicule/voiture/voiture.component';
import { PersonResolver } from './resolvers/person.resolver';

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
  { path: 'template-form', canDeactivate: [LeaveGuard], component: TemplateFormComponent },

  //localhost:4200/reactive-form
  { path: 'reactive-form', component: ReactiveFormComponent },

  //localhost:4200/reactive-formTp
  { path: 'reactive-form-Tp', component: ReactiveFormTpComponent },
  // localhost:4200/table
  { path: 'table', component: TableComponent },
  // localhost:4200/tree
  { path: 'tree', component: TreeComponent },
  // localhost:4200/address-form
  { path: 'address-form', component: AddressFormComponent },

  //on associe un resolver et un guard a la route personne
  {
    path: 'personne', runGuardsAndResolvers: 'always', component: PersonneComponent, resolve: { routeResolver: PersonResolver },
    canActivate: [AuthGuard]
  },
  { path: 'auth', component: AuthComponent },

  // localhost:4200/register
  { path: 'register', component: RegisterComponent },
  // localhost:4200/profile
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard] },

  //chargement des routes du sous module vehicule en mode eager loading
  //cad, on charge le sous module vehicule au demarrage de l'application
  // {
  //   path: 'vehicule', children: [
  //     { path: 'camion', component: CamionComponent },
  //     { path: 'voiture', component: VoitureComponent },
  //     { path: '', redirectTo: 'camion', pathMatch: 'full' },
  //   ]
  // },

   //chargement des routes du sous module vehicule en mode lazy loading
  //cad, on charge le sous module vehicule seulement a l'appel des chemins/routes

  { path: 'vehicule', loadChildren:()=>import('./module/vehicule/vehicule.module')
  .then(m=>m.VehiculeModule)},

  // localhost:4200/features
  { path: 'features', component: FeaturesComponent },

   // localhost:4200/register
   { path: 'developer', component: DeveloperComponent },


  { path: 'error', component: ErrorComponent },

  //pathmatch= full signifie que tout chemin d'url doit corresspondre
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({


   // PreloadAllModules permet de charger tous les modules sans attendre qu’ils soient visités (solution entre lazy et eager loading)
    // L’avantage de ce mécanisme se situe évidemment au niveau des performances, puisque 
  // l’on va pouvoir proposer un affichage de l’application beaucoup plus rapidement 
  // en ne chargeant que la partie nécessaire, et en déférrant le chargement des autres parties.
   //  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })],
  
  
  // enable tracing permet de garder dans la console tous les chemin utilisé avant

  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
