import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/model/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {

  proyecto: Project;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.proyecto = this.projectsService.nuevoProyecto();
  }

  crear() {
    this.projectsService.guardarProyecto(this.proyecto);
  }
}
