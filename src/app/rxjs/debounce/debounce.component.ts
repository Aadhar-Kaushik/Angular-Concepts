import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements AfterViewInit {

  reqData1 = null
  reqData2 = null

  @ViewChild("inp1") inp1: ElementRef
  @ViewChild("inp2") inp2: ElementRef

  constructor() { }

  ngAfterViewInit(): void {

    const source1=fromEvent<any>(this.inp1.nativeElement,"keyup").pipe(map(e=>e.target.value))
    source1
    .pipe(debounceTime(1000))
    .subscribe(data=>{
      this.reqData1=data

      setTimeout(() => {
        this.reqData1=null
      }, 2000);
    })

    const source2=fromEvent<any>(this.inp2.nativeElement,"keyup").pipe(map(e=>e.target.value))

    source2.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(data=>{
      this.reqData2=data

      setTimeout(() => {
        this.reqData2=null
      }, 2000);
    })
  }

}
