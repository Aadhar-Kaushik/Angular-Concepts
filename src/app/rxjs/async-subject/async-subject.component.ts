import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }
  video = ""
  ngOnInit(): void {
   this.du.asyncSub.subscribe(data => {
      this.video = data
    })
  }

  onClickAddBtn(inp) {
    this.du.asyncSub.next(inp.value)
  }

  completeSubscriptionHandler() {
    this.du.asyncSub.complete()
  }
}
