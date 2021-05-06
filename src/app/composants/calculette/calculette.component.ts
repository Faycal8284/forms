import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {
num1!: number;
num2!: number;
result!: number;
  constructor() { }

  ngOnInit(): void {
  }

  addition(){
    this.result =this.num1 + this.num2;
  }
  soustraction(){
    this.result =this.num1 - this.num2;
  }
  multiplication(){
    this.result =this.num1 * this.num2;
  }
  division(){
    this.result =this.num1 / this.num2;
  }

}
