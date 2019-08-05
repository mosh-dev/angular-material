import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NebularComponent} from './nebular.component';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';
import {NebularRoutingModule} from './nebular-routing/nebular-routing.module';
import {NbEvaIconsModule} from '@nebular/eva-icons';

@NgModule({
  declarations: [NebularComponent],
  imports: [
    CommonModule,
    NebularRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbIconModule,
    NbEvaIconsModule
  ]
})
export class NebularModule {
}
