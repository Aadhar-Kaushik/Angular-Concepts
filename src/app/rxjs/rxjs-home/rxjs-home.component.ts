import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.css']
})
export class RXJSHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list=[
    {name:"Promise",link:"/rxjs/promise"},
    {name:"fromEvent",link:"/rxjs/from-event"},
    {name:"Interval and Timer",link:"/rxjs/interval-timer"},
    {name:"Of and From",link:"/rxjs/of-from"},
    {name:"toArray",link:"/rxjs/to-array"},
    {name:"Custom Observable",link:"/rxjs/custom-obs"},
    {name:"Map",link:"/rxjs/map"},
    {name:"Pluck",link:"/rxjs/pluck"},
    {name:"Filter",link:"/rxjs/filter"},
    {name:"Tap",link:"/rxjs/tap"},
    {name:"Take Take Latest and TakeUntil",link:"/rxjs/take"},
    {name:"Retry",link:"/rxjs/retry"},
    {name:"Debounce and DistinctUntilChanged",link:"/rxjs/debounce"},
    {name:"Subject and Behavior Subject",link:"/rxjs/subject"},
    {name:"Replay Subject",link:"/rxjs/replay-subject"},
    {name:"Async Subject",link:"/rxjs/async-subject"},
    {name:"Concat and Merge",link:"/rxjs/concat-merge"},
    {name:"Concat Map and Merge Map and Switch Map",link:"/rxjs/concatmap-mergemap-switchmap"},
    {name:"Exhause map",link:"/rxjs/exhause-map"},
    {name:"Share replay",link:"/rxjs/share-replay"},
    {name:"CombineLatest And WithLatestFrom",link:"/rxjs/combinelatest-withlatestfrom-zip-fork"},
    {name:"Catch Error and Throw Error",link:"/rxjs/Catch-error-throw-error"},
  ]

}
