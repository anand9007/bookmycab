import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@taxi-workspace/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public username?: string;
  private authService = inject(AuthService);
  private router = inject(Router);
  invalidLogin = false;
  public loginDetails = {
    username: '',
    password: '',
  }

  login() {
    const user = this.authService.validateUser(this.loginDetails.username, this.loginDetails.password);
    if(!user){
      this.invalidLogin = true;
      return;
    }

    this.authService.login(user.role);

    switch (user.role) {
      case 'ADMIN':
        this.router.navigate(['/app/admin']);
        break;
      case 'OWNER':
        this.router.navigate(['/app/owner']);
        break;
      case 'PASSENGER':
        this.router.navigate(['/app/passenger']);
        break;
    }
  }
}