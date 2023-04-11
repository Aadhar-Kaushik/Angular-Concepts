import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css']
})
export class StylesComponent implements OnInit {
  toggle1=true
  toggle2=true
  toggle3=true
  toggle4=true
  constructor() { }

  ngOnInit(): void {
  }

}
