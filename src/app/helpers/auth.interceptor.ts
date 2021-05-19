import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';
import { TokenStorageService } from '../shared/token-storage.service';

const TOKEN_HEADER_KEY='x-access-token'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
//un interceptor permet d'intercepter les requetes http entrantes
//et sortantes afin de les modifier ou d'implémentet une mécanique logique particulière

  constructor(private tokenService: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq= request;
    const token = this.tokenService.getToken();
    //Pour modifier une Httprequest , la méthode de clonage doit etre utilisée
    if(token!=null) {authReq=request.clone({headers:request.headers.set(TOKEN_HEADER_KEY,token)});}
    return next.handle(authReq);
  }
}
