import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.scss']
})
export class RxjsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [
    {id:1, name:"Promise",link:"/rxjs/promise"},
    {id:2, name:"Observable",link:"/rxjs/observable"},
    
  ]

}
