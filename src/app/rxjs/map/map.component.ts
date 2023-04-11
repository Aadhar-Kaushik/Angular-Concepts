import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }
  subs: Subscription
  ngOnInit(): void {
    // Ex - 01
    const broadcastVideo = interval(1000)
    this.subs = broadcastVideo
      .pipe(map(e => "Video " + e))
      .subscribe(data => {
        this.du.print("elContainer1", data)
        setTimeout(() => {
          this.subs.unsubscribe()
        }, 10000);
      })

      // Ex - 02
      from([
        {name:"Adam",id:1001},
        {name:"Binny",id:1002},
        {name:"Charley",id:1003},
        {name:"Danny",id:1004},
        {name:"Evan",id:1005},
        {name:"Frank",id:1006},
      ])
      .pipe(map(e=>e["name"]))
      .subscribe(data=>{
        this.du.print("elContainer2",data)
      })

  }

}
