import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(x){
    console.log(x)
  }
  contactMethod=[
    {name:"Adam",value:1},
    {name:"Brayan",value:2},
    {name:"Charles",value:3},
    {name:"Drake",value:4}
  ]
}
