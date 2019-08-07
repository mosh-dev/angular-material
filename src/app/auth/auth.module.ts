import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {DashboardModule} from '../dashboard/dashboard.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DashboardModule
  ],
  entryComponents: [LoginComponent]
})
export class AuthModule {
}
