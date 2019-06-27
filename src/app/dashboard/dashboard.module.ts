import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PanelComponent} from './components/panel.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {NotificationPanelComponent} from './components/notification-panel/notification-panel.component';
import {
  MatBadgeModule,
  MatExpansionModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {WeatherService} from './services/weather.service';

@NgModule({
  declarations: [
    PanelComponent,
    ToolbarComponent,
    SideNavComponent,
    NotificationPanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatBadgeModule,
    MatMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: PanelComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./summery/summery.module').then(m => m.SummeryModule)
          },
          {
            path: 'data-table',
            loadChildren: () => import('./data-table/data-table.module').then(m => m.DataTableModule)
          },
        ]
      }
    ])
  ],
  providers: []
})
export class DashboardModule {
}
