import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit {
  
  @ViewChild("addBtn") addBtn: ElementRef

  constructor(private du: DseignUtilityService) { }
  
  ngAfterViewInit(): void {
    let count = 1
    fromEvent(this.addBtn.nativeElement,"click")
    .subscribe(data=>{
      this.du.print("Video - "+count++,"elContainer")
    })
  }
}
