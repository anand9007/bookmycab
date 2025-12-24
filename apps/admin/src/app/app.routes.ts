import { Route } from '@angular/router';
import { authGuard } from '@taxi-workspace/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'registered-users',
    pathMatch: 'full',
  },
  {
    path: 'registered-users',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./registered-users/registered-users').then(m => m.RegisteredUsers),
  },
];
