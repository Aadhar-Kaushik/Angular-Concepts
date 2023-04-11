import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  status = "noData"
  badge = ""
  ngOnInit(): void {
  }
  fetchData() {
    this.status="fetching"
    this.getData()
    .pipe(
      // retry(3),
      retryWhen(err=>err.pipe(
        delay(1000),
        scan(retryCount=>{
          if(retryCount>=5){
            throw err
          }else{
            retryCount+=1
            this.badge="Retry Attempt #"+retryCount
            return retryCount
          }
        },0)
      ))
      )
    .subscribe(data => {
      this.status="success"
      console.log(data)
    },
    err=>{
      this.status="error"

    })
  }
  getData() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }

}
