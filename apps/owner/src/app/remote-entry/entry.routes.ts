import { Route } from '@angular/router';
import { appRoutes } from '../app.routes';
import { RemoteEntry } from './entry';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TaxiListComponent } from '../taxis/taxi-list/taxi-list.component';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { taxiReducer, TaxiEffects } from '@taxi-workspace/state';

export const remoteRoutes: Route[] = [
    {
        path: '',
        component: TaxiListComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'taxi', component: TaxiListComponent },
          { path: '', redirectTo: 'taxi', pathMatch: 'full' }
        ]
      }
    ]
