import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
nom:any;
prenom:any;



  //le constructeur en angular sert seulement a faire des injection de dependance
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // 2 formes de parametres de requetes

//chemin/nom/prenom


    // 2 manière differentes pour recup ces valeurs
    //paraMap pour chemin/John/Doe

    //solution avec les snapshot(instantanné)

    // this.nom=this.route.snapshot.params.nom;
    // this.prenom=this.route.snapshot.params.prenom;
    // console.log(this.nom, this.prenom)

    //solution avec les observable
    // les obserbales emettent des events qui seront interceptes p
    //par des observateurs(observers)
    this.route.paramMap.subscribe(res=>{
      this.nom=res.get('nom');
      this.prenom=res.get('prenom');
      console.log(this.nom, this.prenom)
    })

    //chemin?nom=doe&prenom=john
    //chemin http://localhost:4200/stagiaire?nom=Wick&prenom=Jphn

    //queryParams avec snapshot
    //queryParamMap pour chemin?nom=doe&prenom=john avec observable

    //Solution avec snapshot
    // this.nom=this.route.snapshot.queryParams.nom;
    // this.prenom=this.route.snapshot.queryParams.prenom;
    //  console.log(this.nom, this.prenom)

   //Solution avec observable

  //  this.route.queryParamMap.subscribe(res=>{
  //   this.nom=res.get('nom');
  //   this.prenom=res.get('prenom');
  //   console.log(this.nom, this.prenom)
  // })
  }

}
