import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  subs1: Subscription
  subs2: Subscription
  constructor(private du: DseignUtilityService) { }

  ngOnInit(): void {

    // Ex - 01
    this.subs1 = interval(1000)
      .pipe(map(data => "Video " + (data + 1)))
      .subscribe(res => {
        this.du.print(res, "elContainer1")

        setTimeout(() => {
          this.subs1.unsubscribe()
        }, 10000);
      })

    // Ex - 02
    this.subs2 = interval(1000)
      .pipe(map(data => data * 2))
      .subscribe(res => {
        this.du.print(res.toString(), "elContainer2")
        setTimeout(() => {
          this.subs2.unsubscribe()
        }, 10000);
      })
      
      // Ex - 03
      from([{name:"Adam",skill:"JS"}, {name:"Billy",skill:"HTML"}, {name:"Charles",skill:"TS"}, {name:"David",skill:"CSS"}, {name:"Evan",skill:"React JS"}, {name:"Frank",skill:"Vue JS"}])
      .pipe(map(data=>data.name))
      .subscribe(res=>{
        this.du.print(res,"elContainer3")
      })
    }

      
}
