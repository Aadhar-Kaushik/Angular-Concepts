import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.css']
})
export class ConcatMergeComponent implements OnInit {

  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source1 = interval(1500).pipe(map(e => "Comedy #" + (e + 1)), take(5))
    const source2 = interval(1000).pipe(map(e => "Tech #" + (e + 1)), take(6))
    const source3 = interval(2000).pipe(map(e => "Movie #" + (e + 1)), take(4))

    // Concat
    concat(source1, source2, source3)
      .subscribe(data => {
        this.du.print("elContainer1", data)
      })

      // Merge
      merge(source1,source2,source3)
      .subscribe(data=>{
        this.du.print("elContainer2",data)
      })
  }

}
