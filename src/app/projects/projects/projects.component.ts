import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  // proyectos = environment.projects; => Ahora piden que dependa de servicio (pasando por ProjectList que piden crearlo esta semana)
  @Input() proyectos: Project[];

  constructor() { }

  ngOnInit() {
  }

}
