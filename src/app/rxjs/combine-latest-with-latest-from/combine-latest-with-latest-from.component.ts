import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, pluck, take, withLatestFrom, zip } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-combine-latest-with-latest-from',
  templateUrl: './combine-latest-with-latest-from.component.html',
  styleUrls: ['./combine-latest-with-latest-from.component.css']
})
export class CombineLatestWithLatestFromZipForkComponent implements AfterViewInit {

  constructor(private du: DesignUtilityService) { }
  @ViewChild("nameDD") nameDD: ElementRef
  @ViewChild("colorDD") colorDD: ElementRef
  nameSource = ["Adam", "Brad", "Charley", "Danny", "Evan", "Frank"]
  colorSource = ["red", 'orange', "green", "yellow", "pink"]
  ngAfterViewInit(): void {
    const nameObs = fromEvent(this.nameDD.nativeElement, "change").pipe(pluck("target", "value"))
    const colorObs = fromEvent(this.colorDD.nativeElement, "change").pipe(pluck("target", "value"))
    nameObs.subscribe(data => {
      console.log(data)
    })
    colorObs.subscribe(data => {
      console.log(data)
    })
    // combineLatest
    combineLatest(nameObs, colorObs)
      .subscribe(([n, c]) => {
        this.du.print("elContainer1", n + "--" + c)
      })

    // withLatestFrom
    nameObs.pipe(withLatestFrom(colorObs))
      .subscribe(([n, c]) => {
        this.du.print("elContainer2", n + "--" + c)

      })

    // Zip
    zip(nameObs, colorObs)
      .subscribe(([n, c]) => {
        this.du.print("elContainer3", n + "--" + c)
        
      })
      
      // Fork Join
      const nameObs2 = fromEvent(this.nameDD.nativeElement, "change").pipe(pluck("target", "value"), take(3))
      const colorObs2 = fromEvent(this.colorDD.nativeElement, "change").pipe(pluck("target", "value"), take(4))
      
      forkJoin(nameObs2,colorObs2)
      .subscribe(([n,c])=>{
        this.du.print("elContainer4", n + "--" + c)
        
    })
  }

}
