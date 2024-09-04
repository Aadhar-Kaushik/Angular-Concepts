import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  log(f){
    console.log(f)
  }

  list=[
    {name:"Adam",id:1},
    {name:"Bob",id:2},
    {name:"Charles",id:3},
    {name:"Drake",id:4},
    {name:"Evan",id:5},
    {name:"Frank",id:6}
  ]
}
