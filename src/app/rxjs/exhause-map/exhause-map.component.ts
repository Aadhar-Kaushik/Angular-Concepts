import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { count, exhaustMap, fromEvent, map } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-exhause-map',
  templateUrl: './exhause-map.component.html',
  styleUrls: ['./exhause-map.component.scss']
})
export class ExhauseMapComponent implements OnInit,AfterViewInit {
  count = 0
  @ViewChild("btn") btn:ElementRef
  constructor(private du: DseignUtilityService) { }

  ngOnInit(): void {
    this.du.getCount().subscribe((data => {
      this.count = data["count"]
    }))
  }

  ngAfterViewInit(): void {
      fromEvent(this.btn.nativeElement,"click")
      .pipe(exhaustMap(()=>this.putData(++this.count)))
      .subscribe(data=>{
        console.log(data)
      })

  }

  putData(count) {
   return this.du.putCount(count)
  }
}
