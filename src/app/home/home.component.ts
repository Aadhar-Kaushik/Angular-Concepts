import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navigationList=[
    {name:"Other Concepts",link:"/other-concepts"},
    {name:"RXJS",link:"/rxjs"}
  ]

}
