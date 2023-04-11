import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OtherListComponent } from './other-list/other-list.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { StylesComponent } from './styles/styles.component';
import { NgContentHomeComponent } from './ng-content-home/ng-content-home.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { DebounceComponent } from './debounce/debounce.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: OtherListComponent },
  { path: "template-driven-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "pipe", component: PipeComponent },
  { path: "styles", component: StylesComponent },
  { path: "ng-content", component: NgContentHomeComponent },
  { path: "directives", component: DirectivesComponent },
  { path: "ng-template-outlet", component: NgTemplateOutletComponent },
  { path: "view-child", component: ViewChildComponent },
  { path: "debounce", component: DebounceComponent },
  { path: "login", component: LoginComponent,children:[
    { path: "login-home", component: LoginHomeComponent,canActivate:[AuthGuardService] },
  { path: "login-profile/:id/:dept", component: LoginProfileComponent,canActivate:[AuthGuardService] }
  ] },
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
