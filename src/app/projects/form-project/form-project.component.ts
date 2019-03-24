import { MiProjectsService } from './../mi-projects-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects/model/project.model';
import { ResultadoFormProject } from './resultado-form-project';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styles: []
})
export class FormProjectComponent implements OnInit {
  @Input() proyecto: Project;
  idOriginal: number;
  // Semana 5: Emite el proyecto cuando cambia el formulario
  @Output() leerProyecto = new EventEmitter<ResultadoFormProject>();
  public formProyecto: FormGroup;
  private projectService: MiProjectsService;
  resultadoForm: ResultadoFormProject;

  constructor(private formBuilder: FormBuilder, private projectSrv: ProjectsService) {
    this.projectService = projectSrv as unknown as MiProjectsService;
  }

  // Semana 5 hasta abajo (formulario reactivo con validacion)
  ngOnInit() {
    this.idOriginal = this.proyecto.id;
    this.buildForm();
    this.formProyecto.patchValue(this.proyecto);
    this.leerProyecto.emit(this.informeFormulario());
  }

  private buildForm() {
    this.formProyecto = this.formBuilder.group({
      id: [this.proyecto.id, [Validators.required, this.validarId.bind(this)]],
      name: [this.proyecto.name, [Validators.required]]
    });
  }

  private validarId(control: AbstractControl) {
    const id = control.value;
    let error = null;
    if (id !== this.idOriginal && this.projectService.nuevoIdExiste({id})) {
      error = { ...error, id: 'el id ya existe para otro proyecto' };
    }
    return error;
  }

  informeFormulario(): ResultadoFormProject {
    return { proyecto: this.formProyecto.value, valido: this.formProyecto.valid };
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formProyecto.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
