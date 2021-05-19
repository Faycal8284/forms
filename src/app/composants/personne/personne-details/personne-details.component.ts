import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {
id!:number;
personne!:Personne;

  constructor(private router:ActivatedRoute,private personneService:PersonneService, private route:Router) { }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
    // this.personneService.getPerson(this.id).subscribe(data => {
    //   console.log(data);
    //   this.personne=data[0];
    // })
    this.personne=this.router.snapshot.data['personne']
  }

  //ou
  // this.route.data.subscribe(data=>{
  //   console.log('check resolver data')
  //   console.log(data)
  //   this.personnes=data.personne => correspond au personne deaclarer dans le routing
  // })
  backToPersonList(){
    this.route.navigate(['/personne'])
  }
}
