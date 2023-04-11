import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    // Ex - 01  of("Adam", "Billy", "Charley", "Danny", "Evan")
    of("Adam", "Billy", "Charley", "Danny", "Evan")
      .subscribe(data => {
        this.du.print("elContainer1", data)
      })
    // Ex - 02 of({a:"Adam",b:"Billy",c:"Charles"})
    of({ a: "Adam", b: "Billy", c: "Charles" }).subscribe(data => {
      this.du.print("elContainer2", JSON.stringify(data))
    })

    // Ex - 03 from Array
    from(["Adam", "Billy", "Charley", "Danny", "Evan"])
      .subscribe(data => {
        this.du.print("elContainer3", data)
      })
    // Ex - 04 from Promise
    const prom = new Promise((res, rej) => {
      res("Promise Resolved !")
    })
    from(prom)
      .subscribe(data => {
        this.du.print("elContainer4", data)
      })
    // Ex - 05 from String
    from("Welcome To Observvable")
      .subscribe(data => {
        this.du.print("elContainer5", data)
      })

  }

}
