import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, count, exhaustMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.css']
})
export class ExhaustmapComponent implements AfterViewInit {

  constructor(private httpClient: HttpClient) { }
  @ViewChild("sendBtn") sendBtn: ElementRef
  count = 0
  ngAfterViewInit(): void {
    fromEvent(this.sendBtn.nativeElement, "click")
      .pipe(exhaustMap(() => this.getData()))
      .subscribe(data => {
        this.count++

      })
  }

  getData() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }
}
