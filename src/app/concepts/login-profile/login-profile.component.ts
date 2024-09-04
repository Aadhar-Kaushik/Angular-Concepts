import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-profile',
  templateUrl: './login-profile.component.html',
  styleUrls: ['./login-profile.component.scss']
})
export class LoginProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  name = ""
  id = ""
  post = ""
  dept = ""
  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.id = data["id"]
    })
    this.router.queryParams.subscribe(data => {
      this.name = data["name"]
    })

    this.dept=this.router.snapshot.queryParamMap.get("dept")
    this.post=this.router.snapshot.queryParamMap.get("post")
  }

}
