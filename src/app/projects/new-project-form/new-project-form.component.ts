import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/model/project.model';
import { ProjectsService } from '../projects.service';
import { ResultadoFormProject } from '../form-project/resultado-form-project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {

  proyecto: Project;
  formularioInvalido: boolean;

  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit() {
    this.proyecto = this.projectsService.nuevoProyecto();
  }

  // Semana 5: Tengo que refrescar el proyecto cuando cambie el formProyecto
  refrescarProyecto(proyecto: ResultadoFormProject) {
    this.proyecto = proyecto.proyecto;
    this.formularioInvalido = !proyecto.valido;
  }

  crear() {
    this.projectsService.guardarProyecto(this.proyecto);
    // Semana 5: Se puede redirigir con un objeto de tipo Route (dependencia en constructor)
    this.router.navigate(['projects']);
  }
}
