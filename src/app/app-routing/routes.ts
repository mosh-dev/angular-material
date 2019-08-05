import {Routes} from '@angular/router';
import {LoginComponent} from '../auth/components/login/login.component';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nebular',
    loadChildren: () => import('../nebular/nebular.module').then(m => m.NebularModule)
  },
  {
    path: '**', redirectTo: ''
  }
];
