import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { UserRole } from "../models/user.model";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const allowedRoutes = route.data?.['roles'] as UserRole[] | undefined;

    if(!auth.isUserLoggedIn()) {
        return router.parseUrl('/login');
    }

    if(allowedRoutes && auth.role && !allowedRoutes?.includes(auth.role)){
        return router.parseUrl('/unauthorized');
    }
    return true;
}