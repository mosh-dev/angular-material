import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SummeryComponent} from './components/summery.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    SummeryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SummeryComponent
      }
    ]),
    SharedModule
  ]
})
export class SummeryModule {
}
