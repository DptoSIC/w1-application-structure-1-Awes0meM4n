import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/model/project.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor-project-form',
  templateUrl: './editor-project-form.component.html',
  styles: []
})
export class EditorProjectFormComponent implements OnInit {

  proyecto: Project;
  proyectoEnServicio: Project;
  mensaje: Mensaje;

  constructor(activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.proyectoEnServicio = projectsService.verProyecto(parseInt(activatedRoute.snapshot.params.id, 10));
    // Doy una copia al formulario para validarla y no guardar cambios al introducirlos
    this.proyecto = JSON.parse(JSON.stringify(this.proyectoEnServicio));
  }

  ngOnInit() {
  }

  actualizar() {
    const guardadoCorrecto = this.projectsService.actualizarProyecto(this.proyecto, this.proyectoEnServicio);
    let textoMensaje: string;
    if (guardadoCorrecto) {
      this.proyectoEnServicio = this.proyecto;
      this.proyecto = JSON.parse(JSON.stringify(this.proyectoEnServicio));
      textoMensaje = 'Se ha guardado ' + this.nombreProyecto() + ' con éxito';
    } else {
      textoMensaje = 'Error al intentar guardar ' + this.nombreProyecto();
    }

    this.mensaje = this.crearMensaje(guardadoCorrecto, textoMensaje);
  }

  borrar() {
    const borradoCorrecto = this.projectsService.borrarProyecto(this.proyecto);
    const textoMensaje = borradoCorrecto ?
      'Se ha borrado ' + this.nombreProyecto() + ' con éxito' :
      'Error de borrado: No se encuentra ' + this.nombreProyecto();
    this.mensaje = this.crearMensaje(borradoCorrecto, textoMensaje);
  }

  nombreProyecto = () => this.proyecto.name + ' (' + this.proyecto.id + ')';

  mostrar(visible: boolean) {
    return visible ? '' : 'd-none';
  }

  crearMensaje(exito: boolean, textoMensaje: string) {
    return {
      texto: textoMensaje,
      clase: exito ? 'success' : 'danger'
    };
  }
}

interface Mensaje {
  texto: string;
  clase: string;
}
