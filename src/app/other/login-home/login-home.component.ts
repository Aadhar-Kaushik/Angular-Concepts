import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  constructor(private router: Router) { }
token=""
  ngOnInit(): void {
    this.token = sessionStorage.getItem("token")
  }
  employees = [
    { name: "Adam", empId: 1001, dept: "ME", post: "Director" },
    { name: "Briyan", empId: 1002, dept: "IT", post: "Manager" },
    { name: "Charles", empId: 1003, dept: "CS", post: "Tech Lead" },
    { name: "Drake", empId: 1004, dept: "IT", post: "Associate" },
    { name: "Frank", empId: 1005, dept: "ECE", post: "Associate" },
    { name: "Harry", empId: 1006, dept: "ME", post: "CEO" }

  ]
  navigate(emp) {
    this.router.navigate(["other-concepts/login/login-profile", emp.empId, emp.dept], { queryParams: { name: emp.name, post: emp.post } })
  }
  logOut(){
    sessionStorage.removeItem("token")
  }
}
