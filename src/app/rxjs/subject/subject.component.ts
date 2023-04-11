import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }
uname=""
  ngOnInit(): void {
    this.du.username.subscribe(data=>{
      this.uname=data
    })
  }

}
