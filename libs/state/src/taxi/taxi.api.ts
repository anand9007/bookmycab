import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taxi } from './taxi.state.models';

@Injectable({ providedIn: 'root' })
export class TaxiApiService {
  private http = inject(HttpClient);
  private api = 'http://localhost:3000/taxis';

  getByOwner(ownerId: string) {
    return this.http.get<Taxi[]>(`${this.api}?ownerId=${ownerId}`);
  }

  add(taxi: Taxi) {
    return this.http.post<Taxi>(this.api, taxi);
  }

  update(id: string, taxi: Taxi) {
    return this.http.put(`${this.api}/${id}`, taxi);
  }

  delete(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
