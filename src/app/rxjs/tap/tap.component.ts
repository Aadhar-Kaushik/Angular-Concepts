import { Component, OnInit } from '@angular/core';
import {  interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const arr = ["Adam", "Bunny", "Charley", "Danny", "Evan", "Frank"]
    let subs: Subscription
    subs=interval(1000)
      .pipe(
        tap(res=>{
          if(res===3){
            subs.unsubscribe();
          }
        }),
        map(e => arr[e]))
      .subscribe(data => {
        this.du.print("elContainer1", data)
      })

  }

}
