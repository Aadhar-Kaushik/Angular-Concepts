import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsHomeComponent } from './concepts-home/concepts-home.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipeComponent } from './pipe/pipe.component';
import { StylesComponent } from './styles/styles.component';
import { NgContentHomeComponent } from './ng-content-home/ng-content-home.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { LoginComponent } from './login/login.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { ServComponent } from './serv/serv.component';
import { HookParentComponent } from './hook/hook-parent/hook-parent.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { SignalsComponent } from './signals/signals.component';

const router: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ConceptsHomeComponent },
  { path: "template-driven-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormsComponent },
  { path: "pipe", component: PipeComponent },
  { path: "styles", component: StylesComponent },
  { path: "ng-content", component: NgContentHomeComponent },
  { path: "directives", component: DirectivesComponent },
  { path: "ng-template-outlet", component: NgTemplateOutletComponent },
  { path: "view-child", component: ViewChildComponent },
  { path: "service", component:ServComponent },
  { path: "hooks", component:HookParentComponent },
  { path: "signals", component:SignalsComponent },
  {
    path: "login", component: LoginComponent, children: [
      { path: "login-home", component: LoginHomeComponent, canActivate: [AuthGuardGuard] },
      { path: "login-profile/:id", component: LoginProfileComponent, canActivate: [AuthGuardGuard] }
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
export class ConceptsRoutingModule { }
