import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  constructor(private du:DseignUtilityService) { }
  allUsers:Observable<any>
  user1:Observable<any>
  user2:Observable<any>

  ngOnInit(): void {
    this.allUsers=this.du.getAllUsers().pipe(shareReplay())
    this.user1=this.allUsers.pipe(map(x=>x.filter(e=>e.id===1)))
    this.user2=this.allUsers.pipe(map(e=>e.filter(e1=>e1["id"]===2)))
  }

}
