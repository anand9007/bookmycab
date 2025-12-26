import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User, UserRole } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

const AUTH_ROLE_KEY = 'user_role';
const USERS_KEY = 'registered_users';
interface LoginResponse {
  user: {
    username: string;
    role: UserRole;
    accessToken: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/users';
  private roleSubject = new BehaviorSubject<UserRole | null>(
    (localStorage.getItem(AUTH_ROLE_KEY) as UserRole) || null);

  readonly role$ = this.roleSubject.asObservable();

  // Auths
  readonly isLoggedIn$ = this.role$.pipe(map(res => !!res));

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

  

  validateUserByCreds(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        map(users => {
          const validUser = users.find(
            u => u.username === username && u.password === password
          ) || null;
          if (!validUser) {
            throw new Error('Invalid credentials');
          }
          return {
             user: {
                username: validUser.username,
                role: validUser.role,
                accessToken: validUser.accessToken,
              },
          }
        })
      );
  }

}