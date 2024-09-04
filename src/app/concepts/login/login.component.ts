import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(f){
    sessionStorage.setItem("token","1")
    this.router.navigate(["concepts/login/login-home"])
  }

  isLoggedIn(){
    return sessionStorage.getItem("token")
  }
}
