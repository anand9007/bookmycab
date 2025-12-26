import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaxiState } from './taxi.state.models';
import { TAXI_FEATURE_KEY } from './taxi.state.feature';

export const selectTaxiState =
  createFeatureSelector<TaxiState>(TAXI_FEATURE_KEY);

export const selectAllTaxis = createSelector(
  selectTaxiState,
  state => state.taxis
);

export const selectTaxiLoading = createSelector(
  selectTaxiState,
  state => state.loading
);
