import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }
  subs1: Subscription
  subs2: Subscription
  ngOnInit(): void {

    // Ex - 01 Interval
    this.subs1 = interval(1000).subscribe(data => {
      this.du.print("elContainer1", "Video " + data)

      if(data>=5){
        this.subs1.unsubscribe()
      }
    })

    // Ex - 02 Timer
    this.subs2 = timer(5000,1000).subscribe(data => {
      this.du.print("elContainer2", "Video " + data)

      if(data>=5){
        this.subs2.unsubscribe()
      }
    })
  }

}
