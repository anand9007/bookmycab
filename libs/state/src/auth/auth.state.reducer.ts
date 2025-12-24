import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.state.actions';
import { AuthState } from './auth.state.models';

export const initialAuthState: AuthState = {
    user: null,
    isAuthenticated: false,
    token: null,
    error: null
}

export const authReducer = createReducer(
    initialAuthState,
    
    // added if user enters wrong and then correct creds to clear error
    on(AuthActions.login, state => ({
        ...state,
        error: null
    })),

    // on login Success action update state
    on(AuthActions.loginSuccess, (state, { user, token }) => ({
        ...state,
        user,
        token,
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
    })),

    // on restoring or preserving user session
    on(AuthActions.restoreSession, (state, { user, token }) => ({
        ...state,
        user,
        token,
        isAuthenticated: true
    }))
);