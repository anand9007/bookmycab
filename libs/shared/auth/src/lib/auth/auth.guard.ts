import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserRole } from "../models/user.model";
import { AuthFacade } from "./auth.facade";
import { combineLatest, map, take } from "rxjs";

export const authGuard: CanActivateFn = (route) => {
    
    const authFacade = inject(AuthFacade);
    const router = inject(Router);
    const roles = route.data?.['roles'] as UserRole[] | undefined;

    return combineLatest([
        authFacade.isLoggedIn$,
        authFacade.role$
    ]).pipe(
        take(1),
        map(([isLoggedIn, role]) => {
        if (!isLoggedIn) {
            return router.parseUrl('/login');
        }

        if (roles && role && !roles.includes(role)) {
            return router.parseUrl('/unauthorized');
        }
        return true;
        }));
}