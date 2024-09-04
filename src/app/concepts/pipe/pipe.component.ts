import { Component, OnInit } from '@angular/core';
import { CustomPipeClass } from './CustomPipe';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value = ""
  onChangeHandler(val) {
    this.value = val.value
  }
}
