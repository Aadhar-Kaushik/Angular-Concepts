import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RXJSHomeComponent } from './rxjs-home/rxjs-home.component';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { PluckComponent } from './pluck/pluck.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceComponent } from './debounce/debounce.component';
import { SubjectComponent } from './subject/subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import {  ConcatmapMergemapSwitchMapComponent } from './concatmap-mergemap/concatmap-mergemap.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import {  CombineLatestWithLatestFromZipForkComponent } from './combine-latest-with-latest-from/combine-latest-with-latest-from.component';
import { CatchErrorThrowErrorrComponent } from './catch-error-throw-errorr/catch-error-throw-errorr.component';

const routes:Routes=[
  {path:"",redirectTo:"rxjs-home", pathMatch:"full"},
  {path:"rxjs-home",component:RXJSHomeComponent},
  {path:"promise",component:PromiseComponent},
  {path:"from-event",component:FromEventComponent},
  {path:"interval-timer",component:IntervalTimerComponent},
  {path:"of-from",component:OfFromComponent},
  {path:"to-array",component:ToArrayComponent},
  {path:"custom-obs",component:CustomObservableComponent},
  {path:"map",component:MapComponent},
  {path:"pluck",component:PluckComponent},
  {path:"filter",component:FilterComponent},
  {path:"tap",component:TapComponent},
  {path:"take",component:TakeComponent},
  {path:"retry",component:RetryComponent},
  {path:"debounce",component:DebounceComponent},
  {path:"subject",component:SubjectComponent},
  {path:"replay-subject",component:ReplaySubjectComponent},
  {path:"async-subject",component:AsyncSubjectComponent},
  {path:"concat-merge",component:ConcatMergeComponent},
  {path:"concatmap-mergemap-switchmap",component:ConcatmapMergemapSwitchMapComponent},
  {path:"exhause-map",component:ExhaustmapComponent},
  {path:"share-replay",component:ShareReplayComponent},
  {path:"combinelatest-withlatestfrom-zip-fork",component:CombineLatestWithLatestFromZipForkComponent},
  {path:"Catch-error-throw-error",component:CatchErrorThrowErrorrComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RXJSRoutingModule { }
