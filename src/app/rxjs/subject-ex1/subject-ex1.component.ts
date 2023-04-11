import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-subject-ex1',
  templateUrl: './subject-ex1.component.html',
  styleUrls: ['./subject-ex1.component.css']
})
export class SubjectEx1Component implements OnInit {

  constructor(private du:DesignUtilityService) { }
  uname=""
  ngOnInit(): void {
  }
  emitName(){
    this.du.username.next(this.uname)
    this.uname=""

  }
}
