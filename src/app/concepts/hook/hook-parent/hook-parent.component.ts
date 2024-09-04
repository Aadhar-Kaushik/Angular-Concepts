import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook-parent',
  templateUrl: './hook-parent.component.html',
  styleUrls: ['./hook-parent.component.scss']
})
export class HookParentComponent implements OnInit {

  constructor() { 
    console.log("Parent Constructor called")
  }
  input = ""
  showChild=true
  ngOnInit(): void {
  }

  onClickBtn(inp) {
    this.input = inp.value
  }
}
