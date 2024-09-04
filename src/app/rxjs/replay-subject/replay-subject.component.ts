import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit,OnDestroy {

  constructor(private du: DseignUtilityService) { }
  list1 = []
  list2 = []
  list3 = []

  subs1: Subscription
  subs2: Subscription
  subs3: Subscription

  isSubscribed2 = false
  isSubscribed3 = false
  ngOnDestroy(): void {
      this.subs1.unsubscribe()
      this.subs2.unsubscribe()
      this.subs3.unsubscribe()
  }

  ngOnInit(): void {
    this.subs1= interval(1000)
    .pipe(map(e=>"Video "+(e+1)))
      .subscribe((data) => {
        this.du.replaySub.next(data.toString())
      })
    this.du.replaySub.subscribe(data => {
      this.list1.push(data)
    })
  }

  onClickAddBtn(inp) {
    // this.du.replaySub.next(inp.value)
  }

  onSubsUnSubs2() {
    if (this.isSubscribed2) {
      this.subs2.unsubscribe()
    } else {
      this.subs2 = this.du.replaySub.subscribe(data => {
        this.list2.push(data)
      })
    }
    this.isSubscribed2 = !this.isSubscribed2
  }

  onSubsUnSubs3() {
    if (this.isSubscribed3) {
      this.subs3.unsubscribe()
    } else {
      this.subs3 = this.du.replaySub.subscribe(data => {
        this.list3.push(data)
      })
    }
    this.isSubscribed3 = !this.isSubscribed3
  }

}
