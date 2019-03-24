import { NotificacionesStoreService } from './../../../notificaciones/notificaciones-store.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Mensaje } from 'src/app/notificaciones/notificaciones-store.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  marca = environment.marca;
  webMarca = environment.webMarca;
  mensaje: Mensaje;

  constructor(private notificaciones: NotificacionesStoreService) {
    notificaciones.select$().pipe(tap(m => this.mensaje = m)).subscribe();
  }

  ngOnInit() {
  }

}
