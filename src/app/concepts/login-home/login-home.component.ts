import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {

  constructor(private serv: ServService, private router:Router) { }
  userList =  [
    { name: "Adam", empId: 1001, dept: "ME", post: "Director" },
    { name: "Briyan", empId: 1002, dept: "IT", post: "Manager" },
    { name: "Charles", empId: 1003, dept: "CS", post: "Tech Lead" },
    { name: "Drake", empId: 1004, dept: "IT", post: "Associate" },
    { name: "Frank", empId: 1005, dept: "ECE", post: "Associate" },
    { name: "Harry", empId: 1006, dept: "ME", post: "CEO" }

  ]
  ngOnInit(): void {
   
  }

  log(item){
    this.router.navigate(["/concepts/login/login-profile",item.empId],{queryParams:{name:item.name,dept:item.dept,post:item.post}})
  }

  onClickLogout(){
    sessionStorage.removeItem("token")
    this.router.navigate(["concepts/login"])
  }



}
