import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PanelComponent} from './components/panel.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {NotificationPanelComponent} from './components/notification-panel/notification-panel.component';
import {MatExpansionModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';

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
    RouterModule.forChild([
      {
        path: '',
        component: PanelComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
          },
          {
            path: 'data-table',
            loadChildren: () => import('./data-table/data-table.module').then(m => m.DataTableModule)
          },
        ]
      }
    ])
  ]
})
export class PanelModule {
}
