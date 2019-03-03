import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Project } from '../projects/model/project.model';

@Component({
  selector: 'app-editor-project',
  templateUrl: './editor-project.component.html',
  styles: []
})
export class EditorProjectComponent implements OnInit {
  claseNombre = 'display-4';
  projectId: number;
  proyecto: Project;

  constructor(activatedRoute: ActivatedRoute) {
    this.projectId = parseInt(activatedRoute.snapshot.params.id);
    this.proyecto = environment.projects.find(p => p.id === this.projectId);
  }

  ngOnInit() {
  }

}
