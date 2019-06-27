import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SummeryComponent} from './components/summery.component';
import {SharedModule} from '../../shared/shared.module';
import {WeatherService} from '../services/weather.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    SummeryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: SummeryComponent
      }
    ]),
    SharedModule
  ],
  providers: [WeatherService]
})
export class SummeryModule {
}
