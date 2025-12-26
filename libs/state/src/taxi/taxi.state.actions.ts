import { createAction, props } from '@ngrx/store';
import { Taxi } from './taxi.state.models';

export const loadTaxis = createAction(
  '[Taxi] Load Taxis',
  props<{ ownerId: string }>()
);

export const loadTaxisSuccess = createAction(
  '[Taxi] Load Taxis Success',
  props<{ taxis: Taxi[] }>()
);

export const loadTaxisFailure = createAction(
  '[Taxi] Load Taxis Failure',
  props<{ error: string }>()
);

export const saveTaxi = createAction(
  '[Taxi] Save Taxi',
  props<{ taxi: Taxi }>()
);

export const deleteTaxi = createAction(
  '[Taxi] Delete Taxi',
  props<{ id: string }>()
);
