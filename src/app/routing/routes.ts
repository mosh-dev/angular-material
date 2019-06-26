import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dataTable',
    loadChildren: () => import('../features/data-table/data-table.module').then(m => m.DataTableModule)
  },
  {
    path: '**', redirectTo: ''
  }
];
