import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherListComponent } from './other-list/other-list.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OtherRoutingModule } from './other-routing.module';
import { PipeComponent } from './pipe/pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './pipe/CustomPipe';
import { StylesComponent } from './styles/styles.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentHomeComponent } from './ng-content-home/ng-content-home.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight-directive';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildViewChildComponent } from './child-view-child/child-view-child.component';
import { DebounceComponent } from './debounce/debounce.component';



@NgModule({
  declarations: [
  
    OtherListComponent,
       TemplateDrivenFormComponent,
       ReactiveFormComponent,
       PipeComponent,
       CustomPipe,
       StylesComponent,
       NgContentComponent,
       NgContentHomeComponent,
       DirectivesComponent,
       HighlightDirective,
       LoginComponent,
       LoginHomeComponent,
       LoginProfileComponent,
       NgTemplateOutletComponent,
       ViewChildComponent,
       ChildViewChildComponent,
       DebounceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
