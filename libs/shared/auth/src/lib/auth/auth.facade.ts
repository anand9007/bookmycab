import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserRole } from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  
  private roleSubject = new BehaviorSubject<UserRole | null>(null);
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  readonly isLoggedIn$ = this.isLoggedInSubject.asObservable();
  readonly role$ = this.roleSubject.asObservable();

  setAuth(isLoggedIn: boolean, role: UserRole | null) {
    this.isLoggedInSubject.next(isLoggedIn);
    this.roleSubject.next(role);
  }

  get roleSnashot(): UserRole | null {
    return this.roleSubject.value;
  }

  clear() {
    this.setAuth(false, null);
  }

}