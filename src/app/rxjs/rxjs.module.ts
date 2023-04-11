import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RXJSRoutingModule } from './rxjs-routing.module';
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
import {HttpClientModule} from "@angular/common/http";
import { DebounceComponent } from './debounce/debounce.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { SubjectEx1Component } from './subject-ex1/subject-ex1.component';
import { SubjectEx2Component } from './subject-ex2/subject-ex2.component';
import { SubjectEx3Component } from './subject-ex3/subject-ex3.component'
import { FormsModule } from '@angular/forms';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { ConcatmapMergemapSwitchMapComponent } from './concatmap-mergemap/concatmap-mergemap.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { CombineLatestWithLatestFromZipForkComponent } from './combine-latest-with-latest-from/combine-latest-with-latest-from.component';
import { CatchErrorThrowErrorrComponent } from './catch-error-throw-errorr/catch-error-throw-errorr.component';


@NgModule({
  declarations: [
    RXJSHomeComponent,
    PromiseComponent,
    FromEventComponent,
    IntervalTimerComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    FilterComponent,
    PluckComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    SubjectEx1Component,
    SubjectEx2Component,
    SubjectEx3Component,
    ConcatMergeComponent,
    ConcatmapMergemapSwitchMapComponent,
    ExhaustmapComponent,
    ShareReplayComponent,
    CombineLatestWithLatestFromZipForkComponent,
    CatchErrorThrowErrorrComponent
  ],
  imports: [
    CommonModule,
    RXJSRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class RXJSModule { }
