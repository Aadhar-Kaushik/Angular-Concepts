import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  data = []
  status = ""
  fetch() {
    this.status = "Fetching..."
    this.http.get('https://jsonplaceholder.typicode.com/tXodos/1')
      // .pipe(retry(4))
      .pipe(retryWhen((err) => err.pipe(
        delay(2000),
        scan(count => {
          if (count >= 3) {
            throw err;

          } else {
            count++
            this.status="Retrying Attempt #"+count
            return count
          }
        }, 0)
      )

      ))
      .subscribe((res: any) => {
        this.data.push(res)
        this.status = "Success!"
      },
        err => {
          console.log(err)
          this.status = "Error!"
        })
  }
}
