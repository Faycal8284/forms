import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  nom: string='wick';
  prenom:string='john';
  nomderue:any;
  numero:any;
  ville:any;


  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.numero=this.route.snapshot.params.numero;
    this.nomderue=this.route.snapshot.params.nomderue;
    this.ville=this.route.snapshot.params.ville;
    console.log(this.numero,this.nomderue,this.ville);


    // this.route.paramMap.subscribe(res => {
    //   this.numero=res.get('numero'),
    //   this.nomderue=res.get('nomderue'),
    //   this.ville=res.get('ville')
    // })

    // this.numero=this.route.snapshot.queryParams.numero;
    // this.nomderue=this.route.snapshot.queryParams.nomderue;
    // this.ville=this.route.snapshot.queryParams.ville;
    // console.log(this.numero,this.nomderue,this.ville)


    // this.route.queryParamMap.subscribe(res => {
    //   this.numero=res.get('numero'),
    //   this.nomderue=res.get('nomderue'),
    //   this.ville=res.get('ville');
    // })

    };
    goToStagiaire(){
      this.router.navigateByUrl("/stagiaire/"+this.nom+"/"+this.prenom);
      this.router.navigate(['/stagiaire/',this.nom,this.prenom])
    }
  }

