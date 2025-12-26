import { AuthState } from './auth';
import { TaxiState } from './taxi/taxi.state.models';
export interface AppState {
  auth: AuthState;
  taxi: TaxiState;
}