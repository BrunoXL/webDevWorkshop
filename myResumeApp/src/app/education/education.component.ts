import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations = [
    {
      degree : "M.Sc",
      institute: "Pontifícia Universidade Católica do Rio de Janeiro - PUC-Rio",
      subject: "Hypermedia and Multimedia",
      start: "March, 2016",
      end: "September, 2019"
    },
    {
      degree : "B.Sc",
      institute: "Pontifícia Universidade Católica do Rio de Janeiro - PUC-Rio",
      subject: "Computer Engennier",
      start: "March, 2010",
      end: "December, 2015"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
