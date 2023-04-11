import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {  CommonService } from './appinit.service';
import { HomeComponent } from './home/home.component';


const serviceLoader1=(serv:CommonService)=>{
return ()=> serv.fetchData1()
}

const serviceLoader2=(serv:CommonService)=>{
  return ()=>serv.fetchData2()
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommonService,
    {
      provide: APP_INITIALIZER,
      useFactory: serviceLoader1,
      deps: [CommonService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: serviceLoader2,
      deps: [CommonService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
