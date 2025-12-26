import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import {
  AUTH_FEATURE_KEY,
  TAXI_FEATURE_KEY,
  AuthEffects,
  authReducer,
  taxiReducer,
  TaxiEffects,
}  from '@taxi-workspace/state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore({
      [AUTH_FEATURE_KEY]: authReducer,
      [TAXI_FEATURE_KEY]: taxiReducer
    }),
    provideEffects([AuthEffects, TaxiEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    })
  ],
};
