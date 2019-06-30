import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SummeryComponent} from './components/summery.component';
import {SharedModule} from '../../shared/shared.module';
import {WeatherService} from '../services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {AnalyticsComponent} from './components/analytics/analytics.component';
import {ChartsModule} from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MatMenuModule, MatSelectModule, MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    SummeryComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    NgxChartsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: SummeryComponent
      },
      {
        path: 'statistics',
        component: AnalyticsComponent
      }
    ]),
    SharedModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [WeatherService]
})
export class SummeryModule {
}
