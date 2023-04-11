import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor() { }
  name=""
  asyncSubject= new AsyncSubject<any>()
  ngOnInit(): void {
    this.asyncSubject.subscribe(data=>{
      this.name=data
    })
  }
  addVideo(vid){
    this.asyncSubject.next(vid.value)
  }
  btnClick(){
    this.asyncSubject.complete()
  }
}
