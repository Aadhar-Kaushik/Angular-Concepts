import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Ex - 01
    interval(1000)
      .pipe(
        take(5),
        toArray())
      .subscribe(data => {
        console.log("Ex - 01", data)

      })


    // Ex - 02
    of("Adam", "Billy", "Charles", "David", "Evan", "Frank")
      .pipe(toArray())
      .subscribe(data => {
        console.log("Ex - 02",data)
      })
      // Ex - 03
      from([{name:"Adam",skill:"JS"}, {name:"Billy",skill:"HTML"}, {name:"Charles",skill:"TS"}, {name:"David",skill:"CSS"}, {name:"Evan",skill:"React JS"}, {name:"Frank",skill:"Vue JS"}])
      .pipe(toArray())
      .subscribe(data=>{
        console.log("Ex - 03",data)

      })
  }

}
