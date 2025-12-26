import { BehaviorSubject } from "rxjs";
import { ToastModel } from "./toast.model";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toastsSubject = new BehaviorSubject<ToastModel[]>([]);
    readonly toasts$ = this.toastsSubject.asObservable();

    show(message: string, type: ToastModel['type'] = 'info', timeout = 3000) {
        const toast: ToastModel = {
            id: Date.now(),
            message,
            type,
            timeout
        }

        this.toastsSubject.next([toast]);

        setTimeout(() => {
            this.remove(toast.id);
        }, timeout);
    }

    remove(id: number){
        this.toastsSubject.next(
            this.toastsSubject.getValue().filter(item => item.id !== id)
        )
    }
}