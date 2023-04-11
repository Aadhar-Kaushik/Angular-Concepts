import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-concatmap-mergemap',
  templateUrl: './concatmap-mergemap.component.html',
  styleUrls: ['./concatmap-mergemap.component.css']
})
export class ConcatmapMergemapSwitchMapComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    const source=from(["Tech","Comedy","News"])
    // Map
    source.pipe(map(e=>this.getVideos(e)))
    .subscribe(data=>{
      data.subscribe(data2=>{
        this.du.print("elContainer1",data2)
      })
    })

    // Map + MergeAll
    source.pipe(map(e=>this.getVideos(e)),mergeAll())
    .subscribe(data=>{
      this.du.print("elContainer2",data)
    })

    // mergeMap
    source.pipe(mergeMap(e=>this.getVideos(e)))
    .subscribe(data=>{
      this.du.print("elContainer3",data)
    })
    // Map + ConcatAll
    source.pipe(map(e=>this.getVideos(e)),concatAll())
    .subscribe(data=>{
      this.du.print("elContainer4",data)
    })
    // ConcatAll
    source.pipe(concatMap(e=>this.getVideos(e)))
    .subscribe(data=>{
      this.du.print("elContainer5",data)
    })
    // SwitchAll + Map
    source.pipe(map(e=>this.getVideos(e)),switchAll())
    .subscribe(data=>{
      this.du.print("elContainer6",data)
    })
    //SwitchMap
    source.pipe(switchMap(e=>this.getVideos(e)))
    .subscribe(data=>{
      this.du.print("elContainer7",data)
    })
  }
  getVideos(data){
    return of(data+" Videos Uploaded").pipe(delay(2000))
  }

}
