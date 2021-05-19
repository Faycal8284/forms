import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../shared/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
//Guard
// un service d'angular qui implement une des interfaces suivantes:
//canActivate: verifie si un utilisateur peut vérifier une route
//on veut que l'accés a la route personne soit seulement autorisé aux utilisateurs authentitifié
  constructor(private router: Router, private tokenService: TokenStorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //pour recupérer une variable de localstorage
      if (Boolean(this.tokenService.getToken())){//localStorage.getItem('isConnected'))){
      return true;
    } else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }

}

