import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risikodaten',
  templateUrl: './risikodaten.component.html',
  styleUrls: ['./risikodaten.component.scss']
})
export class RisikodatenComponent implements OnInit {

  fach_risiko = "Art des Risikos"
  fach_flaeche= "Wohnfläche"
  names = ["Demavand", "Pradeep", "Ashutosh"];
  constructor() { }

  ngOnInit(): void {
  }

}
