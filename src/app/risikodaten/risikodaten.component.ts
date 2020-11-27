import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
//DONE import service
import { TaaService } from './../swagger-api-generated/api/taa.service';
@Component({
  selector: 'app-risikodaten',
  templateUrl: './risikodaten.component.html',
  styleUrls: ['./risikodaten.component.scss']
})
export class RisikodatenComponent implements OnInit {

  observableTaa: Observable;
  selected;

  resultFromApiRequest;
  
  fach_risiko  //TODO load data via service        //"Art des Risikos"
  
  fach_flaeche //TODO load data via service      "Wohnfläche"
  fach_risikoTypen //TODO load data via service    [{name: "Demavand"}, {name :"Pradeep"}, {name: "Ashutosh"}];
  
  
  
  constructor(private taaService:TaaService) { }

  ngOnInit(): void {
   this.observableTaa = this.taaService.getLabelsRisikoGet().subscribe( res =>
    this.resultFromApiRequest = res )
  }
}

