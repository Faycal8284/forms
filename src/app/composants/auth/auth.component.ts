import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

//local et session storage
//deux proprietes permettant d'acceder respectivement aux deux objets local et session
//localstorage: stocke les données sans date d'expiration
//session storage: stocke les données mais ne les donnée s'efface en se decconnectant
  // erreur:boolean = true;
  // username!: string;
  // password!: string;
  form:any = {username:null,
              password:null
  };

  isLoggedIn:boolean = false;
  isLoginFailed:boolean = false;
  errorMessage='';

  constructor(private router: Router,private authService: AuthService,
    private tokenService:TokenStorageService) { }

  ngOnInit(): void {
  }

  //se connecte si les crédentials(username password) sont corrects et redirige vers le composant personne
  // sinon affiche le message d'erreur
  isAuthenticated(){
    const {username,password}= this.form;
    this.authService.login(username,password).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);
        this.isLoggedIn=true;
        this.isLoginFailed=false;
        this.router.navigateByUrl('/home')
      },
      err => {this.errorMessage= err.error.message
      this.isLoginFailed=true}
    )
    // if(this.username === 'John' && this.password === '1234'){
    //   localStorage.setItem('isConnected', 'true');
    //   this.router.navigateByUrl('/personne');
    // } else {
    //   this.erreur = false;
    // }
  }
}