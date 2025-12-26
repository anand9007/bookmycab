import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFacade } from '@taxi-workspace/auth';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private authFacade = inject(AuthFacade);
  role$ = this.authFacade.role$;
  menuItems = [
    // show dashboard to all roles
    { label: 'Dashboard', route: '/app/admin', roles: ['ADMIN'] },
    { label: 'Dashboard', route: '/app/owner/dashboard', roles: ['OWNER'] },
    { label: 'Dashboard', route: '/app/passenger', roles: ['PASSENGER'] },
    // role specific menu items
    { label: 'Taxi Listing', route: '/app/owner/taxi', roles: ['OWNER'] },
    // { label: 'Add / Edit Cab', route: '/app/owner/trips', roles: ['OWNER'] },
    { label: 'Booking History', route: '/app/trips', roles: ['OWNER', 'PASSENGER'] },
    { label: 'Book Cab', route: '/app/owner/bookings', roles: ['PASSENGER'] },
    { label: 'Registered Users', route: '/app/admin/registered-users', roles: ['ADMIN'] },
    { label: 'Manage Owners', route: '/app/admin/registered-users2', roles: ['ADMIN'] },
    { label: 'Manage Passengers', route: '/app/admin/users', roles: ['ADMIN'] },
    { label: 'Banners / Offers', route: '/app/admin/users', roles: ['ADMIN'] },
  ];
}
