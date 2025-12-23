import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.state.actions';
import { AuthState } from './auth.state.models';

export const initialAuthState: AuthState = {
    user: null,
    isAuthenticated: false,
    error: null
}

export const authReducer = createReducer(
    initialAuthState,
    
    // on login Success action update state
    on(AuthActions.loginSuccess, (state, { user }) => ({
        ...state,
        user,
        isAuthenticated: true,
        error: null
    })),

    // on login failure update state
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        user: null,
        isAuthenticated: false,
        error
    })),

    // on logout set initial state
    on(AuthActions.logout, ()=> ({
        ...initialAuthState
    }))
)