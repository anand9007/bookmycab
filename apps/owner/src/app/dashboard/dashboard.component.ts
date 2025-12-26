// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `
//     <router-outlet name="primary"></router-outlet>
//   `,
//   styles: [`
//     .dashboard {
//       padding: 20px;
//     }
//   `]
// })
// export class DashboardComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true
})
export class DashboardComponent {}
