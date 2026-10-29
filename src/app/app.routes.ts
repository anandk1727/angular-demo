import { Routes } from '@angular/router';
import { ScoutComponent } from '../libs/scout/scout.component';

export const routes: Routes = [
  { path: '', component: ScoutComponent, title: 'Scout overview' },
  {
    path: 'contact-us',
    title: 'Contact us',
    loadComponent: () => import('@contact').then((m) => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
