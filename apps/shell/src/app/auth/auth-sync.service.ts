import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthFacade } from '@taxi-workspace/auth';
import { selectAuthState } from '@taxi-workspace/state';

@Injectable({ providedIn: 'root' })
export class AuthSyncService {
  private store = inject(Store);
  private facade = inject(AuthFacade);

  constructor() {
    this.store.select(selectAuthState).subscribe(auth => {
      this.facade.setAuth(
        auth.isAuthenticated,
        auth.user?.role ?? null
      );
    });
  }
}