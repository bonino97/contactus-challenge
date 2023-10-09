import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contactus/contactus.module').then((m) => m.ContactusModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
