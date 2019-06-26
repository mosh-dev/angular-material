import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ]),
    SharedModule
  ]
})
export class DashboardModule {
}
