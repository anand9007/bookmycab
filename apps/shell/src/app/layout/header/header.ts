import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@taxi-workspace/auth';

@Component({
  selector: 'app-header',
  imports: [ CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{
  private authFacade = inject(AuthFacade);
  private router = inject(Router);
  role$ = this.authFacade.role$;
  ngOnInit(): void {
    this.role$.subscribe(roleValue => {
      console.log('User role changed:', roleValue);
    });
  }

   logout() {
    this.authFacade.clear();
    this.router.navigate(['/']);
  }
}
