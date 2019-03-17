import { MiProjectsService } from './../mi-projects-service.service';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects/model/project.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  listaFiltrada: Project[]; // En Semana 3 podía ser: | Project;
  listaObservada$: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {
    const servicio = projectsService as unknown as MiProjectsService;
    this.listaObservada$ = servicio.listaObservable$;
    this.listaObservada$.pipe(tap(() => this.filtrarProyectos(''))).subscribe();
  }

  ngOnInit() {
  }

  public filtrarProyectos(filtro: string) {
    this.listaFiltrada = this.projectsService.filtrarProyectos(filtro) as Project[];
    // Semana 3 podía ser un Project: this.projectsService.filtrarProyectos(filtro);
  }
}
