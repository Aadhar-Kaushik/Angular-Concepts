import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    // Ex - 01
    interval(1000).pipe(take(5), toArray())
    .subscribe(data=>{
      this.du.print("elContainer1",JSON.stringify(data))
    })

    // Ex - 02
    of("Adam","Bradley","Charley","Danny")
    .pipe(toArray())
    .subscribe(data=>{
      this.du.print("elContainer2",JSON.stringify(data))
    })

    // Ex - 03
    const list=[
      {name:"Adam", skill:"JS"},
      {name:"Brock", skill:"Angular"},
      {name:"Charles", skill:"React"}
    ]
    from(list)
    .pipe(toArray())
    .subscribe(data=>{
      this.du.print("elContainer3",JSON.stringify(data))
    })
  }

}
