import { Component, OnInit } from '@angular/core';
import { ServService } from '../concepts/serv.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private serv:ServService) { }

  ngOnInit(): void {
    this.serv.getUsers().subscribe(data=>{
      console.log("getUsers",data)
    })
  }

}
