import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(["Adam", "Brad", "Charles", "Danny", "Evan", "Frank"])

    // Ex - 01
    source
      .pipe(take(4))
      .subscribe(data => {
        this.du.print("elContainer1", data)

      })
    // Ex - 02
    source
      .pipe(takeLast(4))
      .subscribe(data => {
        this.du.print("elContainer2", data)

      })

      // Ex - 03
      interval(1000)
      .pipe(map(e=>"Video "+e),
      // takeUntil(timer(5000))
      takeUntil( fromEvent(document,"click"))
      )
      .subscribe(data=>{
        this.du.print("elContainer3",data)
      })
  }

}
