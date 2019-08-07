import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'abc',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'nebular',
    loadChildren: () => import('../nebular/nebular.module').then(m => m.NebularModule)
  },
  {
    path: '**', redirectTo: ''
  }
];
