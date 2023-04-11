import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  logIn(form) {
    if (form.value.username === "abc" && form.value.password === "123") {
      sessionStorage.setItem("token","123")
      this.router.navigate(["/other-concepts/login/login-home"])
    }
  }
  isLoggedIn(){
    return sessionStorage.getItem("token")
  }
}
