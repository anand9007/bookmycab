export interface Taxi {
  id: string;
  number: string;
  model: string;
  type: 'SEDAN' | 'SUV' | 'HATCHBACK';
  driverName: string;
  status: 'ACTIVE' | 'INACTIVE';
  ownerId: string;
}

export interface TaxiState {
  taxis: Taxi[];
  loading: boolean;
  error: string | null;
}

export type TaxiForm = Omit<Taxi, 'ownerId'>;