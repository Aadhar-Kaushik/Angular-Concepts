import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }

  fetchData1(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts").pipe(tap(e=>console.log("Fecth:::",e)))
  }
  
fetchData2(){
  return this.httpClient.get("https://jsonplaceholder.typicode.com/posts").toPromise().then(res=>{
    console.log("Fetch2:::",res)
  })
}
}
