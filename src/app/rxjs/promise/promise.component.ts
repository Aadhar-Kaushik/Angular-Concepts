import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  res1: any
  res2: any
  res3: any
  res4: any

  constructor(private route: ActivatedRoute) { }
  val: any
  val2: any
  ngOnInit(): void {
    this.res1 = document.getElementById("res1")
    this.res2 = document.getElementById("res2")
    this.res3 = document.getElementById("res3")
    this.res4 = document.getElementById("res4")
    this.getLapTop()

    const promise = new Promise((res, rej) => {

      if (this.delAvailable()) {
        setTimeout(() => {
          res(this.del)

        }, 3000);
      } else if (this.hpAvailable()) {
        setTimeout(() => {

          res(this.hp)
        }, 3000);
      } else {
        setTimeout(() => {

          rej("Not Available!")
        }, 3000);
      }
    })

    promise.then(res => {
      console.log("Then Code ::: ", res)
      this.val = res
    }).catch(err => {
      console.log("Err Code ::: ", err)
      this.val = err

    })
  }
  del = {
    brand: "Del",
    color: "Gray"
  }
  hp = {
    brand: "HP",
    color: "Blue"
  }


  delAvailable() {
    return true
  }
  hpAvailable() {
    return false
  }

  pro = new Promise((res, rej) => {
    setTimeout(() => {

      res("Async/Await resolved ")
    }, 4000);
  })
  async getLapTop() {
    this.val2 = await this.pro
  }

  pro1 = new Promise((res, rej) => {
    setTimeout(() => {
      res({ brand: "Del", color: "Gray" })
    }, 3000);
  })

  fetch1() {
    this.pro1.then(res => {
      this.res1.innerText = JSON.stringify(res)
    })
  }
  async fetch2() {
    let x = await this.pro1
    this.res2.innerText = JSON.stringify(x)
  }

  fetch3() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(res => {
        this.res3.innerText = JSON.stringify(res)
      })
  }
  async fetch4() {
    const resp =await  fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data= await resp.json()
    this.res4.innerText=JSON.stringify(data)

  }

}
