import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptsHomeComponent } from './concepts-home/concepts-home.component';
import { ConceptsRoutingModule } from './concepts-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginComponent } from './login/login.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgContentHomeComponent } from './ng-content-home/ng-content-home.component';
import { StylesComponent } from './styles/styles.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipeClass } from './pipe/CustomPipe';
import { NgContentChildComponent } from './ng-content-home/ng-content-child/ng-content-child.component';
import { HighlightDirective } from './directives/HighlightDirective';
import { ViewChildChildComponent } from './view-child/view-child-child/view-child-child.component';
import { ServComponent } from './serv/serv.component';
import { HookChildComponent } from './hook/hook-child/hook-child.component';
import { HookParentComponent } from './hook/hook-parent/hook-parent.component';
import { SignalsComponent } from './signals/signals.component';



@NgModule({
  declarations: [
    ConceptsHomeComponent,
    TemplateDrivenFormComponent,
    PipeComponent,
    StylesComponent,
    NgContentHomeComponent,
    DirectivesComponent,
    NgTemplateOutletComponent,
    ViewChildComponent,
    LoginComponent,
    LoginHomeComponent,
    LoginProfileComponent,
    ReactiveFormsComponent,
    CustomPipeClass,
    NgContentChildComponent,
    HighlightDirective,
    ViewChildChildComponent,
    ServComponent,
    HookParentComponent,
    HookChildComponent,
    SignalsComponent
  ],
  imports: [
    CommonModule,
    ConceptsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConceptsModule { }
