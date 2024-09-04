import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, catchError, ReplaySubject, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DseignUtilityService {

  constructor(private http: HttpClient) { }

  name = new BehaviorSubject<string>("Aadhar")

  replaySub = new ReplaySubject<string>(3, 5000)
  asyncSub = new AsyncSubject<string>()

  print(text: string, id: string) {
    const el = document.getElementById(id)
    const newEl = document.createElement("li")
    newEl.innerText = text
    el?.appendChild(newEl)
  }
  coloredPrint(text, color, id: string) {
    const el = document.getElementById(id)
    const newEl = document.createElement("li")
    newEl.innerText = text
    newEl.style.color = color
    el?.appendChild(newEl)
  }

  getData(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/comments?postId=" + id)
  }

  putCount(count: number) {
    return this.http.put("https://rxjs-9ef8b-default-rtdb.firebaseio.com/count.json", { count })
  }
  getCount() {
    return this.http.get("https://rxjs-9ef8b-default-rtdb.firebaseio.com/count.json")
  }
  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  
  getCountWithThrowAndCatch() {
    return this.http.get("https://rxjs-9ef8b-default-rtdb.firebaseio.com/count.json")
    .pipe(catchError(this.handleError))
  }

  handleError(err: HttpErrorResponse) {
    let errorMsg = ""
    if (!err.error || !err.error.error) {
      errorMsg = "Unknown Error!!!"
    } else {
      if (err.error.error === "Permission denied") {
        errorMsg = "Permission Denied!!!"
      }
    }

    return throwError(errorMsg);
    

  }
}
