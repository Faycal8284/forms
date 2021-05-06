import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//declaration d'une variable de type chaine de caractère
  title:string="Session Angular"

  // Creer un objet de type personne
  personne:Personne= new Personne(100,'wick','john');

  // Creer u  tableau d'entier 
  tab:number[]=[2,3,4,5,12,15,16];

  //Creer une méthode

  // direBonjour=()=>{
  //   return "Bonjour Angular";
  // }
  direBonjour(){
    return "Bonjour Angular";
  }
nom:string="wick"
couleur:string="blue"

getC(elt: any) {
  if (elt.status === 'done') {
    return 'green';
  }
  return;
}

getColor(){return "white"};

getBackgroundColor(){return "red"};

personnes:Array<Personne> = [

  new Personne(100, 'Wick', 'John'),

  new Personne(200, 'Abruzzi', 'Joe'),

  new Personne(300, 'Doe', 'Blake'),

  new Personne(400, 'Wayne', 'John')

];


tasks = [
  {
    name: 'EATING',
    status: 'doing'
  },

  {
    name: 'DRINKING',
    status: 'done'
  },

  {
    name: 'SLEEPING',
    status: 'done'
  }
];

constructor() { }

  ngOnInit(): void {
  }

}
