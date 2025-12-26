import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AUTH_FEATURE_KEY } from "./auth.state.feature";
import { AuthState } from "./auth.state.models";

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state) => state.isAuthenticated
);

export const selectAuthUser = createSelector(
    selectAuthState,
    (state) => state.user
);

export const selectAuthRole = createSelector(selectAuthState,
    (state) => state.user?.role ?? null
);

export const selectAuthError = createSelector(
    selectAuthState,
    (state) => state.error
);

export const selectIsUserLoggedIn = createSelector(
    selectAuthUser,
    (user) => !!user
)

export const selectUserRole = createSelector(
  selectAuthUser,
  user => user?.role || null
);