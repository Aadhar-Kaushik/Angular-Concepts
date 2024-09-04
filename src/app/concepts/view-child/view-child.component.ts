import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from './view-child-child/view-child-child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements AfterViewInit {

  @ViewChild("parent") parent: ElementRef
  @ViewChild("child") child: ViewChildChildComponent
  constructor() { }

  ngAfterViewInit(): void {
    this.parent.nativeElement.style.color = "white"
    this.parent.nativeElement.style.background = "red"
  }

  changeChildName() {
    this.child.username = "AADHAR"
  }
  clickChildBtn() {
    this.child.log()
  }
}
