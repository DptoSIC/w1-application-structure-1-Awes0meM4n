import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../projects/model/project.model';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styles: []
})
export class FormProjectComponent implements OnInit {
  @Input() proyecto: Project;

  constructor() {}

  ngOnInit() {
  }

}
