import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts-home',
  templateUrl: './concepts-home.component.html',
  styleUrls: ['./concepts-home.component.scss']
})
export class ConceptsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   list = [
    { name: "Template Driven Form", link: "/concepts/template-driven-form" },
    { name: "Reactive Form", link: "/concepts/reactive-form" },
    { name: "Pipe", link: "/concepts/pipe" },
    { name: "Styles", link: "/concepts/styles" },
    { name: "ng-content", link: "/concepts/ng-content" },
    { name: "Directives", link: "/concepts/directives" },
    { name: "Login", link: "/concepts/login" },
    { name: "Ng-template Outlet", link: "/concepts/ng-template-outlet" },
    { name: "View Child", link: "/concepts/view-child" },
    { name: "Service", link: "/concepts/service" },
    { name: "Hook", link: "/concepts/hooks" },
    { name: "Signals", link: "/concepts/signals" },

  ]

}
