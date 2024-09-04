import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {

  flag1=false
  flag2=false
  flag3=false
  flag4=false
  constructor() { }

  ngOnInit(): void {
  }

}
