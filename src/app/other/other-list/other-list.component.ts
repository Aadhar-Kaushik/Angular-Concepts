import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css']
})
export class OtherListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navigationList=[
    {name:"Template Driven Form", link:"/other-concepts/template-driven-form"},
    {name:"Reactive Form", link:"/other-concepts/reactive-form"},
    {name:"Pipe", link:"/other-concepts/pipe"},
    {name:"Styles", link:"/other-concepts/styles"},
    {name:"ng-content", link:"/other-concepts/ng-content"},
    {name:"Directives", link:"/other-concepts/directives"},
    {name:"Login", link:"/other-concepts/login"},
    {name:"Ng-template Outlet", link:"/other-concepts/ng-template-outlet"},
    {name:"View Child", link:"/other-concepts/view-child"},
    {name:"Debounce", link:"/other-concepts/debounce"},
  ]

}
