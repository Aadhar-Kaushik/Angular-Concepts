import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements AfterViewInit {
  search1=null
  search2=null
  @ViewChild("inp1") inp1:ElementRef
  @ViewChild("inp2") inp2:ElementRef
  constructor() { }

  ngAfterViewInit(): void {
    fromEvent<any>(this.inp1.nativeElement,"keyup")
    .pipe(map(e=>e.target.value),
    debounceTime(1000))
    .subscribe(data=>{
      this.search1=data
      
      setTimeout(() => {
        this.search1=null
        
      }, 2000);
    })
    fromEvent<any>(this.inp2.nativeElement,"keyup")
    .pipe(map(e=>e.target.value),
    debounceTime(1000),
    distinctUntilChanged())
    .subscribe(data=>{
      this.search2=data
      
      setTimeout(() => {
        this.search2=null
        
      }, 2000);
    })
  }

}
