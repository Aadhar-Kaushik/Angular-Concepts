import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.scss']
})
export class ObservableHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [
    {name:"fromEvent",link:"from-event"},
    {name:"Interval and Timer",link:"interval-timer"},
    {name:"Of and From",link:"of-from"},
    {name:"toArray",link:"to-array"},
    {name:"Custom Observable",link:"custom-obs"},
    {name:"Map",link:"map"},
    {name:"Pluck",link:"pluck"},
    {name:"Filter",link:"filter"},
    {name:"Tap",link:"tap"},
    {name:"Take Take Latest and TakeUntil",link:"take"},
    {name:"Retry",link:"retry"},
    {name:"Debounce and DistinctUntilChanged",link:"debounce"},
    {name:"Subject and Behavior Subject",link:"subject"},
    {name:"Replay Subject",link:"replay-subject"},
    {name:"Async Subject",link:"async-subject"},
    {name:"Concat and Merge",link:"concat-merge"},
    {name:"Concat Map and Merge Map and Switch Map",link:"concatmap-mergemap-switchmap"},
    {name:"Exhause map",link:"exhause-map"},
    {name:"Share replay",link:"share-replay"},
    {name:"CombineLatest, WithLatestFrom, Zip and Fork",link:"combinelatest-withlatestfrom-zip-fork"},
    {name:"Catch Error and Throw Error",link:"catch-error-throw-error"},
  ]

}
