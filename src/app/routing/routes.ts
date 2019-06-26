import {Routes} from '@angular/router';
import {LandingComponent} from '../components/landing/landing.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**', redirectTo: ''
  }
];
