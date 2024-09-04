import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }

  ngOnInit(): void {
    let count = 1
    let count2 = 1
    let subs1: Subscription
    let subs2: Subscription

    subs1 = interval(1000)
      .subscribe(data => {
        this.du.print("Video - " + count++, "elContainer1")
        if(count>10){
          subs1.unsubscribe()
        }
      })
      
      
      subs2=timer(5000,1000)
      .subscribe(data=>{
        this.du.print("Video - "+count2++,"elContainer2")
        if(count2>5){
          subs2.unsubscribe()
        }
      })
  }

}
