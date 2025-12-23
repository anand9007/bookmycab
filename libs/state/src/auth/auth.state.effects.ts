import { inject, Injectable, NgZone } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.state.actions';
import { AuthService } from "@taxi-workspace/auth";
import { map, switchMap, tap } from "rxjs";
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
                    map(user => {
                        console.log('user ', user);                        
                        if(user) {
                            return AuthActions.loginSuccess({
                                    user: {
                                        username: user.username,
                                        role: user.role,
                                    }
                                })
                        }
                        return AuthActions.loginFailure({ error: 'Invalid credentials' })
                    })
                )
            )
        )
    )

    loginSuccess$ = createEffect(() => 
        this.action$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({user})=> {
                switch (user.role) {
                    case 'ADMIN':
                    this.router.navigate(['/app/admin', user.role.toLowerCase()]);
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