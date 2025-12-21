import { Route } from '@angular/router';
import { authGuard } from '@taxi-workspace/auth';

export const appRoutes: Route[] = [

 {
    path: '',
    loadComponent: () =>
      import('./landing/landing').then(m => m.Landing),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login').then(m => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register').then(m => m.Register),
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('admin/Routes').then(m => m.remoteRoutes),
      },
      {
        path: 'owner',
        loadChildren: () =>
          import('owner/Routes').then(m => m.remoteRoutes),
      },
      {
        path: 'passenger',
        loadChildren: () =>
          import('passenger/Routes').then(m => m.remoteRoutes),
      },
    ],
  },
   { path: '**', redirectTo: '' },
];
