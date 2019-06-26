import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component';
import {RoutingModule} from './routing/routing.module';
import {SharedModule} from './shared/shared.module';
import {MatExpansionModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-material'}),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
