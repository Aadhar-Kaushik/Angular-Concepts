import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
 allUserData:Observable<any>
 userId1Data:Observable<any>
 userId2Data:Observable<any>
  ngOnInit(): void {
    this.allUserData=this.httpClient.get("https://jsonplaceholder.typicode.com/albums").pipe(shareReplay())
    this.userId1Data=this.allUserData.pipe(map(e=>e.filter(user=>user.userId===1)))
    this.userId2Data=this.allUserData.pipe(map(e=>e.filter(user=>user.userId===2)))
  }

}
