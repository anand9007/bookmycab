import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, UserRole } from '@taxi-workspace/auth';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerModel = {
    username: '',
    email: '',
    password: '',
    role: '' as UserRole,
  };
  successMsg?: string;
  private auth = inject(AuthService);
  private route = inject(Router);
  onSubmit(formData: NgForm) { 
    if (formData.valid) {
      this.auth.registerUser(this.registerModel);
      formData.resetForm();
      this.successMsg = 'User Registered Successfully!';
      setTimeout(() => {
        this.successMsg = undefined;
      }, 2000);
      // this.auth.login(this.registerModel.role);
      // this.route.parseUrl('/');
    }
  }
}
