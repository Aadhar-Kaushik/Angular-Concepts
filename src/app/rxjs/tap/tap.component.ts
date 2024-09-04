import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription, tap } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }
  color = ""
  subs1: Subscription
  subs2: Subscription
  ngOnInit(): void {
    const arr = ["Adam", "Billy", "Charles", "David", "Evan", "Frank"]
    const colors = ["green", "blue", "red", "yellow", "pink", "orange"]

    this.subs1 = interval(1000)
      .pipe(
        map(e => arr[e]),
        tap(e => {
          if (e === undefined) {
            this.subs1.unsubscribe()
          }
        })
      )
      .subscribe(res => {
        this.du.print(res, "elContainer1")
      })

    this.subs2 = interval(1000)
      .pipe(

        map(res => colors[res]),
        tap(e => {
          if (e === undefined) {
            this.subs2.unsubscribe()
          }
        })
      )
      .subscribe(data => {
        this.color = data
        this.du.print(data,"elContainer2")
      })
  }

}
