import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  overview = {
    name: "Bruno Xavier leitão",
    birthDate: "08/31/1991",
    address: "119 Miguel Lemos st",
    city: "Rio de Janeiro, RJ",
    country: "Brazil",
    email: "brunox.leitao@gmail.com"
  }

  constructor() { }

  ngOnInit() {
  }

}
