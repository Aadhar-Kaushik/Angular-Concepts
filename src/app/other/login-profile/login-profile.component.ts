import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-profile',
  templateUrl: './login-profile.component.html',
  styleUrls: ['./login-profile.component.css']
})
export class LoginProfileComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  id = ""
  name = ""
  post = ""
  dept = ""
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.name = this.activatedRoute.snapshot.queryParamMap.get("name")
    this.activatedRoute.paramMap.subscribe(data=>{
      this.dept=data.get("dept")
    })
    this.activatedRoute.queryParamMap.subscribe(data=>{
      this.post=data.get("post")
    })
  }

}
