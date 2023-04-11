import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildViewChildComponent } from '../child-view-child/child-view-child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {

  constructor() { }
  @ViewChild("box") box: ElementRef
  @ViewChild(ChildViewChildComponent) child:ChildViewChildComponent
  userName = "Aadhar"

  ngAfterViewInit(): void {
    this.box.nativeElement.style.background="salmon"
    this.box.nativeElement.style.color="green"

  }

  changeChildName(){
    this.child.userName="Changed by User 1"
  }
clickChildBtn(){
  this.child.clickMe()
}
}
