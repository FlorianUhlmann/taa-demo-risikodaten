import { Component, OnInit } from '@angular/core';
//TODO import service


@Component({
  selector: 'app-risikodaten',
  templateUrl: './risikodaten.component.html',
  styleUrls: ['./risikodaten.component.scss']
})
export class RisikodatenComponent implements OnInit {

  selected;
  
  fach_risiko  //TODO load data via service        //"Art des Risikos"
  
  fach_flaeche //TODO load data via service      "Wohnfläche"
  fach_risikoTypen //TODO load data via service    [{name: "Demavand"}, {name :"Pradeep"}, {name: "Ashutosh"}];
  
  
  
  constructor(/* TODO import service */) { }

  ngOnInit(): void {
    //TODO call service here AND assign data to variables fach_risiko|fach_fleache|fach_risikoTypen
  }
}

