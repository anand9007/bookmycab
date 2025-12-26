import { Route } from '@angular/router';
import { authGuard } from '@taxi-workspace/auth';

// export const appRoutes: Route[] = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('./registered-users-2/registered-users2').then(m => m.RegisteredUsers2),
//     canActivate: [authGuard],
//     children: [
//       {
//         path: 'registered-users',
//         canActivate: [authGuard],
//         loadComponent: () =>
//           import('./registered-users/registered-users').then(m => m.RegisteredUsers),
//       },
//     ],
//   }
  
// ];

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   loadComponent: () => import('./registered-users-2/registered-users2').then(m => m.RegisteredUsers2),
  //   canActivate: [authGuard],
  //   children: [
  //     {
  //       path: '', // When user visits the base URL
  //       pathMatch: 'full',
  //       redirectTo: 'registered-users' // Automatically go to the data component
  //     },
  //     {
  //       path: 'registered-users',
  //       loadComponent: () => import('./registered-users/registered-users').then(m => m.RegisteredUsers),
  //       canActivate: [authGuard],
  //     },
  //   ],
  // }

  {
    path: '', // The parent stays as the container
    loadComponent: () =>
      import('./registered-users-2/registered-users2').then(m => m.RegisteredUsers2),
    canActivate: [authGuard],
    children: [
      {
        path: '', // CHANGE THIS from 'registered-users' to ''
        loadComponent: () =>
          import('./registered-users/registered-users').then(m => m.RegisteredUsers),
      },
      {
        path: 'registered-users', // CHANGE THIS from 'registered-users' to ''
        loadComponent: () =>
          import('./registered-users/registered-users').then(m => m.RegisteredUsers),
      },
      {
        path: 'registered-users2', // CHANGE THIS from 'registered-users' to ''
        loadComponent: () =>
          import('./registered-users/registered-users').then(m => m.RegisteredUsers),
      },
    ],
  }
];