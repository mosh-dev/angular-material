import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';


import { MatSidenav, MatAccordion } from '@angular/material';
import { AppComponent } from './components/app.component';
import { routingComponents, RouteModule } from './modules/route.module';
import { DataService } from './services/data.service';
import { WeatherService } from './services/weather.service';
import { MaterialModule } from './modules/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { JumpToTopComponent } from './components/jump-to-top/jump-to-top.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoadingComponent,
    NotFoundComponent,
    JumpToTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouteModule,
    FlexLayoutModule
  ],
  providers: [DataService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
