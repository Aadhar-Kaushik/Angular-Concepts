import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, withLatestFrom, fromEvent, pluck, zip, take, forkJoin } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-combinelatest-withlatestfrom-zip-fork',
  templateUrl: './combinelatest-withlatestfrom-zip-fork.component.html',
  styleUrls: ['./combinelatest-withlatestfrom-zip-fork.component.scss']
})
export class CombinelatestWithlatestfromZipForkComponent implements AfterViewInit {

  constructor(private du: DseignUtilityService) { }
  @ViewChild("name") name: ElementRef
  @ViewChild("color") color: ElementRef
  ngAfterViewInit(): void {

    const colorObs = fromEvent(this.color.nativeElement, "change").pipe(pluck("target", "value"))
    const nameObs = fromEvent(this.name.nativeElement, "change").pipe(pluck("target", "value"))

    combineLatest(colorObs, nameObs)
      .subscribe(([col, name]) => {

        console.log(col, name)
        this.du.coloredPrint(name, col, "elContainer1")
      })

    nameObs.pipe(withLatestFrom(colorObs))
      .subscribe(([name, color]) => {
        this.du.coloredPrint(name, color, "elContainer2")
      })

    zip(nameObs, colorObs)
      .subscribe(([name, color]) => {
        this.du.coloredPrint(name, color, "elContainer3")
        
      })
      
      forkJoin(nameObs.pipe(take(2)),colorObs.pipe(take(3)))
      .subscribe(([name,color])=>{
        this.du.coloredPrint(name, color, "elContainer4")
        
      })
  }

}
