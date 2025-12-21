import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'registered-users',
    pathMatch: 'full',
  },
  {
    path: 'registered-users',
    loadComponent: () =>
      import('./registered-users/registered-users').then(m => m.RegisteredUsers),
  },
];
