import {Routes} from '@angular/router';
import {LandingComponent} from '../components/landing/landing.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../panel/panel.module').then(m => m.PanelModule)
  },
  {
    path: '**', redirectTo: ''
  }
];
