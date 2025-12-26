import { Component, inject } from "@angular/core";
import { ToastService } from "./toast.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'lib-app-toast-component',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="toast-container position-fixed top-0 end-0 my-3 text-bg-dark">
    <div class="toast align-items-center text-bg-dark border-0 show" role="alert" *ngFor="let toast of toasts$ | async">
        <div class="toast-header py-0">
            <strong class="me-auto">Alert</strong>
            <button type="button" class="btn-close" (click)="remove(toast.id)">''</button>
        </div>
        <div class="d-flex">
            <div class="toast-body" [ngClass]="toastClass(toast.type)">
            {{ toast.message }}
            </div>
            <div class="p-2">
              <small class="text-body-secondary">{{ toast.id | date: 'h:mm a'}}</small>
            </div>
        </div>
        </div>
        </div>
  `
})
export class ToastComponent {
  private toastService = inject(ToastService);
  toasts$ = this.toastService.toasts$;

  toastClass(type: string) {
    return {
      'text-success': type === 'success',
      'text-danger': type === 'error',
      'text-info': type === 'info',
      'text-warning': type === 'warning'
    };
  }

  remove(id: number) {
    this.toastService.remove(id);
  }
}