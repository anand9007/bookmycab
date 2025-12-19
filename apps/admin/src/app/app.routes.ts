import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'registered-users',
    loadComponent: () =>
      import('./registered-users/registered-users').then(m => m.RegisteredUsers),
  },
];
