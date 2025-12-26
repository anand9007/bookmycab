import { HttpClient } from "@angular/common/http";
import { Taxi } from "./taxi.model";
import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TaxiService {
  private api = 'http://localhost:3000/taxis';

  private http = inject(HttpClient);
  getByOwner(ownerId: string) {
    return this.http.get<Taxi[]>(`${this.api}?ownerId=${ownerId}`);
  }

  getById(id: string) {
    return this.http.get<Taxi>(`${this.api}/${id}`);
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