import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LandingComponent} from './components/landing/landing.component';
import {MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {HostDirective} from './host.directive';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HostDirective
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({appId: 'angular-material'}),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LandingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
