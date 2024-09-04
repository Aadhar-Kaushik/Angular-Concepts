import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceComponent } from './debounce/debounce.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { ConcatmapMergemapSwitchmapComponent } from './concatmap-mergemap-switchmap/concatmap-mergemap-switchmap.component';
import { ExhauseMapComponent } from './exhause-map/exhause-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombinelatestWithlatestfromZipForkComponent } from './combinelatest-withlatestfrom-zip-fork/combinelatest-withlatestfrom-zip-fork.component';
import { CatchErrorThrowErrorComponent } from './catch-error-throw-error/catch-error-throw-error.component';
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { Comp3Component } from './subject/comp3/comp3.component';



@NgModule({
  declarations: [RxjsHomeComponent, PromiseComponent, FromEventComponent, IntervalTimerComponent, OfFromComponent, ToArrayComponent, CustomObsComponent, MapComponent, PluckComponent, FilterComponent, TapComponent, TakeComponent, RetryComponent, DebounceComponent, SubjectComponent, ReplaySubjectComponent, AsyncSubjectComponent, ConcatMergeComponent, ConcatmapMergemapSwitchmapComponent, ExhauseMapComponent, ShareReplayComponent, CombinelatestWithlatestfromZipForkComponent, CatchErrorThrowErrorComponent, Comp1Component, Comp2Component, Comp3Component],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
