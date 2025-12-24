import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, selectAuthError } from '@taxi-workspace/state';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private store = inject(Store);
  invalidLogin = false;
  public loginDetails = {
    username: '',
    password: '',
  }

  login() {    
    this.store.dispatch(login(this.loginDetails))
  }

  authError$ = this.store.select(selectAuthError);
}