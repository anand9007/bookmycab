import { Component, EventEmitter, Input, OnChanges,  Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Taxi } from '../taxi.model';

@Component({
  selector: 'app-taxi-form-modal',
  imports: [CommonModule,FormsModule],
  templateUrl: './taxi-form-modal.component.html',
  styleUrl: './taxi-form-modal.component.css',
  standalone: true
})
export class TaxiFormModalComponent implements OnChanges {
  @Input() taxi: Taxi | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<Taxi>();

  form: Taxi = {
    id: '',
    number: '',
    model: '',
    type: 'SEDAN',
    driverName: '',
    status: 'ACTIVE',
  };

  ngOnChanges() {
    if (this.taxi) {
      this.form = { ...this.taxi };
    } else {
      this.form = {
        id: '',
        number: '',
        model: '',
        type: 'SEDAN',
        driverName: '',
        status: 'ACTIVE',
      };
    }
  }

  close() {
    this.closed.emit();
  }

  save() {
    this.saved.emit(this.form);
  }
}