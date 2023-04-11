import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  debounce(fn, delay) {
    let timer;
    return function () {
      clearInterval(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay);
    }
  }

  counter = 0
  getData() {
    console.log("Counter:::::::", ++this.counter)
  }
  onKeyPress= this.debounce(this.getData, 500)

}
