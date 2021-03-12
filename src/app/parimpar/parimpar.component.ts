import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parimpar',
  templateUrl: './parimpar.component.html',
  styleUrls: ['./parimpar.component.css']
})
export class ParimparComponent implements OnInit {

  num: number;

    constructor() {}

  isEven(){
    return this.num % 2 == 0;
  }

  isOdd(){
    return this.num % 2 == 1;
  
  }

  ngOnInit() {
  }

}