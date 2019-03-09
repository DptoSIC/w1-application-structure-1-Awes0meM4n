import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../projects/model/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {

  @Input() proyectos: Project[];

  constructor() {}

  ngOnInit() {
  }

}
