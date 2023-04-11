import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit {

  constructor(private du:DesignUtilityService) { }

  @ViewChild("addBtn") addBtn:ElementRef
  count=1
  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement,"click").subscribe(data=>{
      const vid="Video "+this.count++
      this.du.print("elContainer",vid)
    })
  }

}
