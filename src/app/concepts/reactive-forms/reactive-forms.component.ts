import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  f=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3),
    CustomValidator.containsSpace],[CustomValidator.isNotUnique]),
    password:new FormControl("",[])
  })

  log(f){
    console.log(f)
  }
  
  get uname(){
    return this.f.get("username")
  }
  get pwd(){
    return this.f.get("password")
  }
}
