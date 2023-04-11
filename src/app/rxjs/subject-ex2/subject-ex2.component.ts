import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-subject-ex2',
  templateUrl: './subject-ex2.component.html',
  styleUrls: ['./subject-ex2.component.css']
})
export class SubjectEx2Component implements OnInit {

  
  constructor(private du:DesignUtilityService) { }
  uname=""
  ngOnInit(): void {
  }
  emitName(){
    this.du.username.next(this.uname)
    this.uname=""

  }

}
