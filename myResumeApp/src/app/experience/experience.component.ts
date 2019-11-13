import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      position: "Researcher in Multimedia and NCL",
      institute: "TeleMedia",
      city: "Rio de Janeiro",
      start: "May, 2017",
      end: "",
      website: "http://www.telemidia.puc-rio.br",
    },
    {
      position: "Trainee",
      institute: "TeleMedia",
      city: "Rio de Janeiro",
      start: "July, 2013",
      end: "December 2015",
      website: "http://www.telemidia.puc-rio.br",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
