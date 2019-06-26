import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from '../app.module';
import {AppComponent} from '../components/app.component';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    FlexLayoutServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
