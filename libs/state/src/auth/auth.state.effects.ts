import { inject, Injectable, NgZone } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.state.actions';
import { AuthService } from "@taxi-workspace/auth";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    private action$ = inject(Actions);
    private authService = inject(AuthService);
    private router = inject(Router);
    private ngZone = inject(NgZone);
    
    login$ = createEffect(() => 
        this.action$.pipe(
            ofType(AuthActions.login),
            switchMap(({ username, password }) => 
                this.authService.validateUserByCreds(username, password).pipe(
                    tap(res => {
                        // persist logged user untill logouts
                        if (res?.user.accessToken) {
                            localStorage.setItem('access_token', res.user.accessToken);
                        }
                        if (res?.user.role) {
                            localStorage.setItem('role', res.user.role);
                        }
                    }),
                    map(res1 =>
                        AuthActions.loginSuccess({
                            user: res1.user,
                            token: res1.user.accessToken
                        })
                    ),
                    catchError(error => 
                        of(AuthActions.loginFailure({ error: error }))
                    )
                )
            ),
        )
    )

    loginSuccess$ = createEffect(() => 
        this.action$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({user})=> {
                switch (user.role) {
                    case 'ADMIN':
                    this.router.navigate(['/app/admin']);
                    break;
                    case 'OWNER':
                    this.router.navigate(['/app/owner']);
                    break;
                    case 'PASSENGER':
                    this.router.navigate(['/app/passenger']);
                    break;
                }
            })
        ),
        {
            dispatch: false
        }
    )
}