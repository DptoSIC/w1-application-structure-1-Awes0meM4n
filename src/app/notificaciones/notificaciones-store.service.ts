import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesStoreService {

  private notifications: Mensaje[] = [];
  private notifications$ = new BehaviorSubject<Mensaje>(this.notifications[this.notifications.length - 1]);

  constructor() { }

  public select$ = () => this.notifications$.asObservable();

  public dispatch(notification: Mensaje) {
    this.notifications.push(notification);
    this.notifications$.next(this.notifications[this.notifications.length - 1]);
  }
}

export interface Mensaje {
  texto: string;
  exito: boolean;
  warning?: boolean;
}
