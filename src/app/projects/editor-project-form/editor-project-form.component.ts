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

  guardadoCorrecto = false;
  guardadoIncorrecto = false;
  borradoCorrecto = false;
  borradoIncorrecto = false;
  proyecto: Project;
  proyectoEnServicio: Project;

  constructor(activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.proyectoEnServicio = projectsService.verProyecto(parseInt(activatedRoute.snapshot.params.id, 10));
    // Doy una copia al formulario para validarla y no guardar cambios al introducirlos
    this.proyecto = JSON.parse(JSON.stringify(this.proyectoEnServicio));
  }

  ngOnInit() {
  }

  actualizar() {
    console.log(this.proyecto);
    this.guardadoCorrecto = this.projectsService.actualizarProyecto(this.proyecto, this.proyectoEnServicio);
    this.guardadoIncorrecto = !this.guardadoCorrecto;
    if (this.guardadoCorrecto) {
      this.proyectoEnServicio = this.proyecto;
      this.proyecto = JSON.parse(JSON.stringify(this.proyectoEnServicio));
    }
  }

  borrar() {
    this.borradoCorrecto = this.projectsService.borrarProyecto(this.proyecto);
    this.borradoIncorrecto = !this.borradoCorrecto;
  }

  nombreProyecto = () => this.proyecto.name + ' (' + this.proyecto.id + ')';

  mostrar(visible: boolean) {
    return visible ? '' : 'd-none';
  }
}
