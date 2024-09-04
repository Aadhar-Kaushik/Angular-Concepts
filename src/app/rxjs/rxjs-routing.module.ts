import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
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
import { ObservableComponent } from '../observable/observable.component';
import { ObservableHomeComponent } from '../observable-home/observable-home.component';

const router: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: RxjsHomeComponent },
  { path: "promise", component: PromiseComponent },
  {
    path: "observable", component: ObservableComponent, children: [
      { path: "", component: ObservableHomeComponent },
      { path: "from-event", component: FromEventComponent },
      { path: "interval-timer", component: IntervalTimerComponent },
      { path: "of-from", component: OfFromComponent },
      { path: "to-array", component: ToArrayComponent },
      { path: "custom-obs", component: CustomObsComponent },
      { path: "map", component: MapComponent },
      { path: "pluck", component: PluckComponent },
      { path: "filter", component: FilterComponent },
      { path: "tap", component: TapComponent },
      { path: "take", component: TakeComponent },
      { path: "retry", component: RetryComponent },
      { path: "debounce", component: DebounceComponent },
      { path: "subject", component: SubjectComponent },
      { path: "replay-subject", component: ReplaySubjectComponent },
      { path: "async-subject", component: AsyncSubjectComponent },
      { path: "concat-merge", component: ConcatMergeComponent },
      { path: "concatmap-mergemap-switchmap", component: ConcatmapMergemapSwitchmapComponent },
      { path: "exhause-map", component: ExhauseMapComponent },
      { path: "share-replay", component: ShareReplayComponent },
      { path: "combinelatest-withlatestfrom-zip-fork", component: CombinelatestWithlatestfromZipForkComponent },
      { path: "catch-error-throw-error", component: CatchErrorThrowErrorComponent },
    ]
  },



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
