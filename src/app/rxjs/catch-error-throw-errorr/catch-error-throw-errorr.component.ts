import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error-throw-errorr',
  templateUrl: './catch-error-throw-errorr.component.html',
  styleUrls: ['./catch-error-throw-errorr.component.css']
})
export class CatchErrorThrowErrorrComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error = null
  ngOnInit(): void {
  }

  fetchDetails() {
    this.error = null
    this.fetchData().subscribe(data => {
      console.log(data)
    },
      err => {
        this.error = err
      })
  }
  fetchData() {
    return this.http.get("https://jsonplaceholder.typicode.com/postsa")
      .pipe(catchError(this.errorService))
  }

  errorService(err: HttpErrorResponse) {
    let errorMsg;
    if (!err.error || !err.error.error) {
      errorMsg = "Some Unknown Error"
    } else {
      if (err.error.error === "Permission denied") {
        errorMsg = "You don't have permission"
      }
    }
    return throwError(errorMsg)
  }
}
