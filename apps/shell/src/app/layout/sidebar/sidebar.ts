import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@taxi-workspace/auth';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit{
  private authService = inject(AuthService);
  role$ = this.authService.role$;
  menuItems = [
    // show dashboard to all roles
    { label: 'Dashboard', route: '/dashboard', roles: ['OWNER', 'PASSENGER', 'ADMIN'] },
    // role specific menu items
    { label: 'Cab Listing', route: '/trips', roles: ['OWNER'] },
    { label: 'Add / Edit Cab', route: '/trips', roles: ['OWNER'] },
    { label: 'Booking History', route: '/trips', roles: ['OWNER', 'PASSENGER'] },
    { label: 'Book Cab', route: '/bookings', roles: ['PASSENGER'] },
    { label: 'Registered Users', route: '/admin/registered-users', roles: ['ADMIN'] },
    { label: 'Manage Owners', route: '/admin/users', roles: ['ADMIN'] },
    { label: 'Manage Passengers', route: '/admin/users', roles: ['ADMIN'] },
    { label: 'Banners / Offers', route: '/admin/users', roles: ['ADMIN'] },
  ];
  ngOnInit(): void {
    this.role$.subscribe(role => {
      console.log('Sidebar User role changed:', role);
    });
  }

  navigate(value: string) {
    console.log('Navigating to', value);
  }
}
