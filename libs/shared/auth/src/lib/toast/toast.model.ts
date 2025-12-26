export interface ToastModel {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info' ;
  timeout: number;
}