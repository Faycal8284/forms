import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private router: Router, private tokenService: TokenStorageService){}
 title = 'angular-project';

 // declaration d'un tableau de route utilisés dans le html
  tabs: any[]=[

  {title:'home',
   path:'home' 
  },
  {title:'stagiaire',
   path:'stagiaire' 
  },
  {title:'adresse',
  path:'adresse' 
 },
 {title:'template-form',
 path:'template-form' 
},
{title:'calculette',
path:'calculette' 
},
{title:'reactive-form',
path:'reactive-form' 
},
{title:'reactive-form-Tp',
path:'reactive-form-Tp' 
},
{title:'personne',
path:'personne' 
},
{ 
  title: 'table', 
  path: 'table',
},
{ 
  title: 'tree', 
  path: 'tree',
},
{ 
  title: 'address-form', 
  path: 'address-form',
},
{ 
  title: 'auth', 
  path: 'auth',
},
{ 
  title: 'register', 
  path: 'register',
},
{ 
  title: 'profile', 
  path: 'profile',
},
{ 
  title: 'camion', 
  path: 'vehicule/camion',
},
{ 
  title: 'voiture', 
  path: 'vehicule/voiture',
},
{ 
  title: 'features', 
  path: 'features',
},
{ 
  title: 'developer', 
  path: 'developer',
},

  ];

  //se deconnecte en supprimant la propriete isConnected du localstorage
  logOut(){
  //   localStorage.removeItem('isConnected');
  //   this.router.navigateByUrl('/home')
  this.tokenService.signOut();
    window.location.reload()
};


  isConnected(){
    if(Boolean(this.tokenService.getToken())) 
      return true;
      return false;
  }
  
}
