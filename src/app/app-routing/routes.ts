import {Routes} from '@angular/router';
import {LandingComponent} from '../components/landing/landing.component';
import {LoginComponent} from '../auth/components/login/login.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**', redirectTo: ''
  }
];
