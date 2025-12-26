import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TaxiActions from './taxi.state.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { TaxiApiService } from './taxi.api';

@Injectable()
export class TaxiEffects {
  private actions$ = inject(Actions);
  private taxiService = inject(TaxiApiService );

  loadTaxis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaxiActions.loadTaxis),
      mergeMap(({ ownerId }) =>
        this.taxiService.getByOwner(ownerId).pipe(
          map(taxis => TaxiActions.loadTaxisSuccess({ taxis })),
          catchError(() =>
            of(TaxiActions.loadTaxisFailure({ error: 'Unable to load taxis' }))
          )
        )
      )
    )
  );
}
