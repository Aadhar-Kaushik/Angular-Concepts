import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.scss']
})
export class ViewChildChildComponent implements OnInit {

  constructor() { }
  username="Child"
  ngOnInit(): void {
  }

  log(){
    alert(this.username)
  }
}
