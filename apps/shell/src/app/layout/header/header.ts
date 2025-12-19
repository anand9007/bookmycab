import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@taxi-workspace/auth';

@Component({
  selector: 'app-header',
  imports: [ CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{
  private authService = inject(AuthService);
  private router = inject(Router);
  role$ = this.authService.role$;
  ngOnInit(): void {
    this.role$.subscribe(roleValue => {
      console.log('User role changed:', roleValue);
    });
  }

   logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
