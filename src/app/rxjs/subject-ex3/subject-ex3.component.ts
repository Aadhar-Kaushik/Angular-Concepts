import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-subject-ex3',
  templateUrl: './subject-ex3.component.html',
  styleUrls: ['./subject-ex3.component.css']
})
export class SubjectEx3Component implements OnInit {

  
  constructor(private du:DesignUtilityService) { }
  uname=""
  ngOnInit(): void {
  }
  emitName(){
    this.du.username.next(this.uname)
    this.uname=""

  }
}
