import { Route } from '@angular/router';
import { authGuard } from '@taxi-workspace/auth';
import { loadRemoteModule } from '@angular-architects/module-federation'; 
// export const appRoutes: Route[] = [

//  {
//     path: '',
//     loadComponent: () =>
//       import('./landing/landing').then(m => m.Landing),
//   },
//   {
//     path: 'login',
//     loadComponent: () =>
//       import('./auth/login/login').then(m => m.Login),
//   },
//   {
//     path: 'register',
//     loadComponent: () =>
//       import('./auth/register/register').then(m => m.Register),
//   },
//   {
//     path: 'app',
//     canActivateChild: [authGuard],
//     loadComponent: () =>
//       import('./layout/layout').then(m => m.Layout),
//       children: [
//         {
//           path: 'admin',
//           outlet: 'owner-remote',
//           loadChildren: () =>
//             import('admin/Routes').then(m => m.remoteRoutes),
//         },
//         {
//           path: 'owner',
//           loadChildren: () =>
//             import('owner/Routes').then(m => m.remoteRoutes),
//         },
//         {
//           path: 'passenger',
//           loadChildren: () =>
//             import('passenger/Routes').then(m => m.remoteRoutes),
//         },
//       ],
//     },
//    { path: '**', redirectTo: '' },
// ];

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
    // canActivateChild: [authGuard],
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