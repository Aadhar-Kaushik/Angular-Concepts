import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableHomeComponent } from './observable-home/observable-home.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ServService } from './concepts/serv.service';


const servLoaderObs=(serv:ServService)=>{
  return ()=>serv.fetchUsersObs()
}

const servLoaderPro=(serv:ServService)=>{
  return ()=>serv.fetchUsersPro()
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    ObservableComponent,
    ObservableHomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,
      useFactory:servLoaderObs,
      deps:[ServService],
      multi:true
    },
    {
      provide:APP_INITIALIZER,
      useFactory:servLoaderPro,
      deps:[ServService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
