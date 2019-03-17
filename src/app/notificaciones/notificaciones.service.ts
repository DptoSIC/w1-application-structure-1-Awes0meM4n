import { NotificacionesStoreService } from './notificaciones-store.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificacionesService implements HttpInterceptor{

  constructor(private notificacionesStoreService: NotificacionesStoreService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mensaje = req.method + ':(' + req.url + '){' + req.body + '} pasada a ' + next;
    console.log(mensaje);
    //this.notificacionesStoreService.dispatch({ texto: mensaje, exito: true });
    return next.handle(req);
  }
}
