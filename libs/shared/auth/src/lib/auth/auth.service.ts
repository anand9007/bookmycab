import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User, UserRole } from '../models/user.model';

const AUTH_ROLE_KEY = 'user_role';
const USERS_KEY = 'registered_users';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private roleSubject = new BehaviorSubject<UserRole | null>(
    (localStorage.getItem(AUTH_ROLE_KEY) as UserRole) || null);

  readonly role$ = this.roleSubject.asObservable();

  // Auths
  readonly isLoggedIn$ = this.role$.pipe(map(res => !!res));

  login(role: UserRole){
    this.roleSubject.next(role);
    localStorage.setItem(AUTH_ROLE_KEY, role);
  }

  logout(){
    localStorage.removeItem(AUTH_ROLE_KEY);
    this.roleSubject.next(null);
  }

  get role(): UserRole | null {
    return this.roleSubject.value;
  }

  isUserLoggedIn(): boolean {
    return this.role !== null;
  }

  //User Checkers
  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  }

  registerUser(newUser: User){
    const users = this.getUsers();
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  validateUser(username: string, password: string): User | null {
    const users = this.getUsers();
    return users.find(usr => usr.username === username && usr.password === password) || null
  }

}