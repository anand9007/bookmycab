import { createReducer, on } from '@ngrx/store';
import * as TaxiActions from './taxi.state.actions';
import { TaxiState } from './taxi.state.models';

export const initialTaxiState: TaxiState = {
  taxis: [],
  loading: false,
  error: null,
};

export const taxiReducer = createReducer(
  initialTaxiState,

  on(TaxiActions.loadTaxis, state => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TaxiActions.loadTaxisSuccess, (state, { taxis }) => ({
    ...state,
    taxis,
    loading: false,
  })),

  on(TaxiActions.loadTaxisFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
