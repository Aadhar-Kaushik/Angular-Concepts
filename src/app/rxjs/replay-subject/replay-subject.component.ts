import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  replay = new ReplaySubject<string>(3,3000)
  subs2: Subscription
  subs3: Subscription
  user1List = []
  user2List = []
  user3List = []
  constructor() { }
  toggle2 = true
  toggle3 = true
  ngOnInit(): void {
  }

  addVideo(vid) {
    this.user1List.push(vid.value)
    this.replay.next(vid.value)
  }
  btn2Click() {
    if (this.toggle2) {
      this.subs2 = this.replay.subscribe(data => {
        this.user2List.push(data)
      })
    } else {
      this.subs2.unsubscribe()
      
    }
    this.toggle2 = !this.toggle2
  }
  btn3Click() {
    if (this.toggle3) {
      this.subs3 = this.replay.subscribe(data => {
        this.user3List.push(data)
        
      })
    } else {
      this.subs3.unsubscribe()

    }
    this.toggle3 = !this.toggle3
  }
}
