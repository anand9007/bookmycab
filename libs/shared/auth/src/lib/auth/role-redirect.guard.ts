import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const roleRedirectGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const role = auth.role;
  if(!role){
    router.parseUrl('/login');
  }

  switch (role) {
    case 'ADMIN':
      return router.parseUrl('/admin');
    case 'PASSENGER':
      return router.parseUrl('/passenger');
    case 'OWNER':
      return router.parseUrl('/owner');
    default:
      return router.parseUrl('/login');
  }
};
