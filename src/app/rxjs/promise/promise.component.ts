import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  constructor() { }

  promiseVal

  dellAvail() {
    return false
  }

  hpAvail() {
    return false
  }
  dellProp = {
    brand: "Dell",
    storage: "2 TB",
    color: "Black"
  }

  hpProp = {
    brand: "HP",
    storage: "1 TB",
    color: "Gray"
  }

  noAvail = {
    status: "Not Available"
  }

  ngOnInit(): void {
    this.getLaptop().then(res => {
      this.promiseVal = res
    }).catch(e => {
      this.promiseVal = e
    })

  }
  getLaptop() {
    return new Promise((res, rej) => {
      if (this.dellAvail()) {
        setTimeout(() => {
          
          res(this.dellProp)
        }, 2000);
      } else if (this.hpAvail()) {
        setTimeout(() => {
          
          res(this.hpProp)
        }, 2000);
      } else {
        setTimeout(() => {
          
          rej(this.noAvail)
        }, 2000);
      }
    })
  }
}
