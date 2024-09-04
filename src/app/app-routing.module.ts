import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "rxjs", loadChildren: () => import("./rxjs/rxjs.module").then(m => m.RxjsModule) },
  { path: "concepts", loadChildren: () => import("./concepts/concepts.module").then(m => m.ConceptsModule) },
  { path: "**", component: PageNotFoundComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
