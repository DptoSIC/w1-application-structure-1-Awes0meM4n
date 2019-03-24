import { Observable } from 'rxjs';
import { NotificacionesStoreService, Mensaje } from './../../notificaciones/notificaciones-store.service';
import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/model/project.model';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ResultadoFormProject } from '../form-project/resultado-form-project';

@Component({
  selector: 'app-editor-project-form',
  templateUrl: './editor-project-form.component.html',
  styles: []
})
export class EditorProjectFormComponent implements OnInit {

  proyecto: Project;
  proyectoEnServicio: Project;
  mensaje: Mensaje;
  mensaje$: Observable<Mensaje>;
  formularioInvalido: boolean;

  constructor(activatedRoute: ActivatedRoute,
              private projectsService: ProjectsService,
              private notificacionesStoreService: NotificacionesStoreService) {
    this.proyectoEnServicio = projectsService.verProyecto(parseInt(activatedRoute.snapshot.params.id, 10));
    // Doy una copia al formulario para validarla y no guardar cambios al introducirlos
    this.proyecto = JSON.parse(JSON.stringify(this.proyectoEnServicio));
    this.mensaje$ = notificacionesStoreService.select$();
    this.mensaje$.pipe(tap(m => this.mensaje = m)).subscribe();
  }

  ngOnInit() {
  }

  // Semana 5: Tengo que refrescar el proyecto cuando cambie el formProyecto
  refrescarProyecto(proyecto: ResultadoFormProject) {
    this.proyecto = proyecto.proyecto;
    this.formularioInvalido = !proyecto.valido;
  }

  actualizar() {
    const guardadoCorrecto = this.projectsService.actualizarProyecto(this.proyecto, this.proyectoEnServicio);
    let textoMensaje: string;
    let exito: boolean;
    if (guardadoCorrecto) {
      this.proyectoEnServicio = this.proyecto;
      this.proyecto = JSON.parse(JSON.stringify(this.proyectoEnServicio));
      textoMensaje = 'Se ha guardado ' + this.nombreProyecto() + ' con éxito';
      exito = true;
    } else {
      textoMensaje = 'Error al intentar guardar ' + this.nombreProyecto();
      exito = false;
    }

    /* Código Semana 3
    this.mensaje = this.crearMensaje(guardadoCorrecto, textoMensaje);
    */
    this.notificacionesStoreService.dispatch({ texto: textoMensaje, exito });
  }

  borrar() {
    const borradoCorrecto = this.projectsService.borrarProyecto(this.proyecto);
    const textoMensaje = borradoCorrecto ?
      'Se ha borrado ' + this.nombreProyecto() + ' con éxito' :
      'Error de borrado: No se encuentra ' + this.nombreProyecto();

    /* Código Semana 3
    this.mensaje = this.crearMensaje(borradoCorrecto, textoMensaje);
    */
    this.notificacionesStoreService.dispatch({ texto: textoMensaje, exito: borradoCorrecto });
  }

  nombreProyecto = () => this.proyecto.name + ' (' + this.proyecto.id + ')';
}
