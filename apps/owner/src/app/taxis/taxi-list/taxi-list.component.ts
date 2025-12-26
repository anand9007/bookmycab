import { Component, inject, OnInit } from '@angular/core';
import { Taxi } from '../taxi.model';
import { TaxiService } from '../taxi.service';
import {  Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaxiFormModalComponent } from '../taxi-form-modal/taxi-form-modal.component';

@Component({
  selector: 'app-taxi-list',
  imports: [CommonModule, TaxiFormModalComponent],
  templateUrl: './taxi-list.component.html',
  styleUrl: './taxi-list.component.css',
  standalone: true
})
export class TaxiListComponent implements OnInit {
  private taxiService = inject(TaxiService);
  private router = inject(Router);

  taxis: Taxi[] = [];
  loading = false;

  // TEMP: later this should come from auth/session
  ownerId = 'OWNER_1';

  ngOnInit(): void {
    this.loadTaxis();
  }

  loadTaxis() {
    this.loading = true;
    this.taxiService.getByOwner(this.ownerId).subscribe({
      next: taxis => {
        this.taxis = taxis;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  showModal = false;
  selectedTaxi: Taxi | null = null;

  openAdd() {
    this.selectedTaxi = null;
    this.showModal = true;
  }

  openEdit(taxi: Taxi) {
    this.selectedTaxi = taxi;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  generateId(): number {
    return Date.now(); 
  }

  saveTaxi(taxi: Taxi) {
    const isEdit = !!taxi.id;
    console.log('taxi ', taxi);
    const payload = {
    ...taxi,
    ownerId: this.ownerId,
    id: isEdit ? taxi.id : Date.now().toString()
  };
    
    const request$ = isEdit
      ? this.taxiService.update(taxi.id, payload)
      : this.taxiService.add(payload);

    request$.subscribe({
      next: () => {
        this.closeModal();
        this.loadTaxis();
      },
    });
  }

  deleteTaxi(taxi: Taxi) {
    if (!taxi.id) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete taxi ${taxi.number}?`
    );

    if (!confirmed) return;

    this.taxiService.delete(taxi.id).subscribe({
      next: () => {
        this.loadTaxis();
      },
      error: () => {
        alert('Failed to delete taxi');
      },
    });
  }
}
