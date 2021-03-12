import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabuada",
  templateUrl: "./tabuada.component.html",
  styleUrls: ["./tabuada.component.css"]
})
export class TabuadaComponent implements OnInit {
  value: number;

  constructor() {
    this.value = 0;
  }

  getNumber () {
    return this.value;
  }

  getOperation () {
    let list: number[] = [];
    for(let i=1; i<=11; i++)
        list.push(this.getNumber());
        return list;    
  }

  ngOnInit() {}
}
