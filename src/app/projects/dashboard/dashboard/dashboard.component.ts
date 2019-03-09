import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../projects/model/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  listaFiltrada: Project[] | Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
  }

  public filtrarProyectos(filtro: string) {
    this.listaFiltrada = this.projectsService.filtrarProyectos(filtro);
  }
}
