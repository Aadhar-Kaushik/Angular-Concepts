import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from './custom-validations';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  f = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3), CustomValidation.ShouldNotContainSpace], CustomValidation.isUnique),
    password: new FormControl("")
  })

  get uname() {
    return this.f.get("username")
  }
  get pwd() {
    return this.f.get("password")
  }
}
