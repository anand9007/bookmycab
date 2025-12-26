import { Route } from '@angular/router';
import { TaxiListComponent } from './taxis/taxi-list/taxi-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const appRoutes: Route[] = [
    {
        path: '',
        component: TaxiListComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'taxi', component: TaxiListComponent },
          { path: 'trips', component: TaxiListComponent },
          { path: '', redirectTo: 'taxi', pathMatch: 'full' }
        ]
      },
    ]

