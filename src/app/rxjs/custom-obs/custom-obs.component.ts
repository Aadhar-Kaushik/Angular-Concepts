import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.scss']
})
export class CustomObsComponent implements OnInit {

  constructor(private du: DseignUtilityService) { }
  status = ""
  status2 = ""
  status3 = ""
  name = ""

  subs2: Subscription
  ngOnInit(): void {


    // Ex - 01
    const custObs1 = new Observable((obs: any) => {
      setTimeout(() => {
        obs.next("Video 1")
      }, 1000);
      setTimeout(() => {
        obs.next("Video 2")
      }, 2000);
      setTimeout(() => {
        obs.next("Video 3")
        // obs.error("Custom Error !");

      }, 3000);
      setTimeout(() => {
        obs.next("Video 4")
        obs.complete()
      }, 4000);
      setTimeout(() => {
        obs.next("Video 5")
      }, 5000);
    })

    custObs1.subscribe((data: any) => {
      this.du.print(data, "elContainer1")
    },
      (err: any) => {
        this.status = "error"
      },
      () => {
        this.status = "complete"

      })

    // Ex - 02
    const custObs2 = Observable.create((obs: any) => {
      const names = ["Adam", "Bob", "Charles", "Dany", "Evan", "Frank"]
      let count = 0
      setInterval(() => {
        if (count >= 3) {
          obs.error("Error Occured!!!")
        }
        if (count >= 5) {
          obs.complete()
        }
        obs.next(names[count++])
      }, 1000)

    })

    custObs2.subscribe((data: any) => {
      this.du.print(data, "elContainer2")
    },
      (err: any) => {
        this.status2 = "error"
      },
      () => {
        this.status2 = "complete"

      })


    // Ex - 03
    const custObs3 = Observable.create((obs: any) => {
      const names = ["Adam", "Bob", "Charles", "Dany", "Evan", "Frank"]
      let count = 0
      setInterval(() => {
        if (count === 3) {
          obs.error("Error!!!!")
        }
        if (count === 5) {
          obs.complete()
        }

        obs.next(names[count++])

      }, 1000)
    })

    custObs3
      .subscribe((data: any) => {
        this.name = data
      },
        (err: any) => {
          this.status3 = "error"
        },
        () => {
          this.status3 = "complete"

        })
  }




}
