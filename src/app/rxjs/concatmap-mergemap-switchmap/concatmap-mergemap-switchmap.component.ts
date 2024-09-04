import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatAll, concatMap, debounceTime, delay, distinctUntilChanged, filter, from, fromEvent, interval, map, mergeAll, mergeMap, of, pluck, switchAll, switchMap, take } from 'rxjs';
import { DseignUtilityService } from '../dseign-utility.service';

@Component({
  selector: 'app-concatmap-mergemap-switchmap',
  templateUrl: './concatmap-mergemap-switchmap.component.html',
  styleUrls: ['./concatmap-mergemap-switchmap.component.scss']
})
export class ConcatmapMergemapSwitchmapComponent implements OnInit, AfterViewInit {

  @ViewChild("inp") inp: ElementRef
  constructor(private du: DseignUtilityService) { }
  list = []
  ngOnInit(): void {
    const source = from(["News", "Tech", "Comedy"])
    // Map
    source
      .pipe(map(e => this.getVideos(e)))
      .subscribe(res => {
        res.subscribe(res1 => {
          this.du.print(res1, "elContainer1")
        })
      })

    // map + MergeAll
    source.pipe(map(e => this.getVideos(e)), mergeAll())
      .subscribe(res => {
        this.du.print(res, "elContainer2")
      })
    // MergeMap
    source.pipe(mergeMap(e => this.getVideos(e)))
      .subscribe(res => {
        this.du.print(res, "elContainer3")
      })
    // Map + ConcatAll
    source.pipe(map(e => this.getVideos(e)), concatAll())
      .subscribe(res => {
        this.du.print(res, "elContainer4")
      })
    // ConcatMap
    source.pipe(concatMap(e => this.getVideos(e)))
      .subscribe(res => {
        this.du.print(res, "elContainer5")
      })
    // Map + SwitchAll
    source.pipe(map(e => this.getVideos(e)), switchAll())
      .subscribe(res => {
        this.du.print(res, "elContainer6")
      })
    // SwitchMap
    source.pipe(switchMap(e => this.getVideos(e)))
      .subscribe(res => {
        this.du.print(res, "elContainer7")
      })


  }

  ngAfterViewInit(): void {
    fromEvent(this.inp.nativeElement, "keyup")
      .pipe(
        filter(e => e["target"]["value"] !== ""),
        switchMap(e => this.du.getData(e["target"]["value"])),
        debounceTime(1000), distinctUntilChanged(),
      )
      .subscribe((data: any) => {
        this.list = data
      })
  }
  getVideos(vid) {
    return of("Video #" + (vid)).pipe(delay(2000))
  }

}
