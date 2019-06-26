import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component';
import {RoutingModule} from './routing/routing.module';
import {LandingComponent} from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-material'}),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
