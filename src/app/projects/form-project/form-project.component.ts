import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Project } from '../projects/model/project.model';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styles: []
})
export class FormProjectComponent implements OnInit {
  projectId: number;
  proyectos: Project[] = [];
  proyecto: Project;

  constructor(activatedRoute: ActivatedRoute) {
    this.projectId = parseInt(activatedRoute.snapshot.params.id, 10);
  }

  ngOnInit() {
    this.proyectos = environment.projects;
    console.log(this.projectId);
    this.proyecto = this.proyectos.find(p => p.id === this.projectId);

    if (!this.proyecto) {
      this.proyecto =  { id: this.generarId(), name: '' };
    }
  }

  generarId() {
    const ids = [];
    for (let p of this.proyectos) {
      ids.push(p.id);
    }
    return Math.max(...ids) + 1;
  }

  public guardarProyecto(){
    this.proyectos.push(this.proyecto);
  }
}
