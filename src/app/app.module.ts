import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component';
import {RoutingModule} from './routing/routing.module';
import {LandingComponent} from './components/landing/landing.component';
import {MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({appId: 'angular-material'}),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
