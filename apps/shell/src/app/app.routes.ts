// import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';
import { authGuard, roleRedirectGuard } from '@taxi-workspace/auth';

export const appRoutes: Route[] = [

  // //protected routes
  // {
  //   path: '',
  //   canActivate: [authGuard],
  //   loadComponent: () => import('./layout/layout').then((m) => m.Layout),
  //   children: [
  //     { path: '', redirectTo: 'redirect', pathMatch: 'full' },
  //     {
  //       path: 'redirect',
  //       canActivate: [roleRedirectGuard],
  //       loadComponent: () => import('./layout/layout').then((m) => m.Layout),
  //     },
  //     {
  //       path: 'admin',
  //       data: { roles: ['ADMIN'] },
  //       loadChildren: () => import('admin/Routes').then((m) => m.remoteRoutes),
  //     },
  //     {
  //       path: 'passenger',
  //       data: { roles: ['PASSENGER'] },
  //       loadChildren: () =>
  //         import('passenger/Routes').then((m) => m.remoteRoutes),
  //     },
  //     {
  //       path: 'owner',
  //       data: { roles: ['OWNER'] },
  //       loadChildren: () => import('owner/Routes').then((m) => m.remoteRoutes),
  //     },
  //   ],
  // },

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
