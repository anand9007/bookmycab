import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '@taxi-workspace/auth';
import { login, selectAuthError, selectIsUserLoggedIn } from '@taxi-workspace/state';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store);
  invalidLogin = false;
  public loginDetails = {
    username: '',
    password: '',
  }

  login() {
    
    // const user = this.authService.validateUser(this.loginDetails.username, this.loginDetails.password);
    // if(!user){
    //   this.invalidLogin = true;
    //   return;
    // }

    // this.authService.login(user.role);
    this.store.dispatch(login({
      username: this.loginDetails.username,
      password: this.loginDetails.password
    }))


    // switch (user.role) {
    //   case 'ADMIN':
    //     this.router.navigate(['/app/admin']);
    //     break;
    //   case 'OWNER':
    //     this.router.navigate(['/app/owner']);
    //     break;
    //   case 'PASSENGER':
    //     this.router.navigate(['/app/passenger']);
    //     break;
    // }
  }

  authError$ = this.store.select(selectAuthError);
}