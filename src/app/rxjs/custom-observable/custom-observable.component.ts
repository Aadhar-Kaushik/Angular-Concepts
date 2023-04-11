import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  constructor(private du: DesignUtilityService) { }
  status = ""
  badge = "No Data"
  status2 = ""
  badge2 = "No Data"
  subs2: Subscription
  subs3: Subscription
  name = ""
  ngOnInit(): void {

    // Ex - 01
    const customObs = Observable.create(observer => {
      setTimeout(() => {
        observer.next("Angular")
      }, 1000);
      setTimeout(() => {
        observer.next("Javascript")
      }, 2000);
      setTimeout(() => {
        observer.next("HTML CSS")
      }, 3000);
      setTimeout(() => {
        observer.next("React")
        // observer.complete();

      }, 4000);
      setTimeout(() => {
        observer.next("Jquery")
        observer.error("Error Occured!");
      }, 5000);
    })

    customObs.subscribe(data => {
      this.badge = "Fetching..."
      this.du.print("elContainer1", data)
    },
      err => {
        this.badge = err
        this.status = "error"
      },
      () => {
        this.status = "complete"
        this.badge = "Completed..."

      })

    // Ex - 02
    let count = 1
    const customObs2 = Observable.create(obs => {
      setInterval(() => {
        obs.next("Video " + count)
        
        if(count>=5){
          obs.complete()
        }
        if (count >= 4) {
          obs.error("Error Occured")
        }
        count++
      }, 1000)

    })
    this.subs2 = customObs2.subscribe(data => {
      this.badge2 = "Fetching..."

      this.du.print("elContainer2", data)

    },
      err => {
        this.badge2 = err
        this.status2 = "error"
      },
      () => {
        this.status2 = "complete"
        this.badge2 = "Completed..."

      })

    const arr = ["Adam", "Billy", "Charles", "Danny", "Evan"]
    let count2 = 0
    let customObs3 = Observable.create(obs => {
      setInterval(()=>{

        obs.next(arr[count2])
        if(count2>=arr.length-1){
          obs.complete()
        }
        count2++
        
      },1000)
    })
   this.subs3= customObs3.subscribe(data=>{
      this.name=data
    })

  }

  ngOnDestroy(): void {
      this.subs2.unsubscribe()
      this.subs3.unsubscribe()
  }
  
}
