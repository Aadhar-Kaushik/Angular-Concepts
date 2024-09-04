import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }

  ngOnInit(): void {

    const source1 = interval(3000).pipe(take(3), map(e => "Tech #" + (e + 1)))
    const source2 = interval(1000).pipe(take(2), map(e => "Comedy #" + (e + 1)))
    const source3 = interval(2500).pipe(take(4), map(e => "News #" + (e + 1)))

    source1.subscribe(data=>{
      this.du.print(data,"elContainer1")
    })
    source2.subscribe(data=>{
      this.du.print(data,"elContainer2")
    })
    source3.subscribe(data=>{
      this.du.print(data,"elContainer3")
    })
    
    concat(source1,source2,source3).subscribe(data=>{
      this.du.print(data,"elContainer4")

    })
    merge(source1,source2,source3).subscribe(data=>{
      this.du.print(data,"elContainer5")

    })
  }

}
