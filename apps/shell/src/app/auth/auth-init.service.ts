import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { AuthUser, restoreSession } from "@taxi-workspace/state";

@Injectable({ providedIn: 'root' })
export class AuthInitService {
  private store = inject(Store);

  init() {
    const token = localStorage.getItem('access_token');
    const role = localStorage.getItem('role');

    if (token && role) {
      this.store.dispatch(
        restoreSession({ token, user: { role } as AuthUser})
      );
    }
  }
}