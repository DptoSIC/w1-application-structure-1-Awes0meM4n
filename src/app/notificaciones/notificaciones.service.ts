import { NotificacionesStoreService } from './notificaciones-store.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NotificacionesService implements HttpInterceptor{

  constructor(private notificacionesStoreService: NotificacionesStoreService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const mensaje = req.method + ':(url="' + req.url + '"){body:' + JSON.stringify(req.body) + '}';
    //console.log(mensaje);
    this.notificacionesStoreService.dispatch({ texto: mensaje, exito: true });
    return next.handle(req);
  }
}
