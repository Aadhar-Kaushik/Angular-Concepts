import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }

  ngOnInit(): void {
    const obs = from(["Adam", "Billy", "Charles", "David", "Evan", "Frank"])

    // Ex - 01
    obs
      .pipe(take(3))
      .subscribe(res => {
        this.du.print(res, "elContainer1")
      })

    // Ex - 02
    obs
    .pipe(takeLast(4))
    .subscribe(res => {
      this.du.print(res, "elContainer2")
    })

    // Ex - 03
    interval(1000)
    .pipe(map(res=>"Video "+(res+1)),
    takeUntil(fromEvent(document,"click")))
    .subscribe(data=>{
      this.du.print(data,"elContainer3")
    })
  }

}
