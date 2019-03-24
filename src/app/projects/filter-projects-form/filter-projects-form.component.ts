import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {

  @Output() filtrar = new EventEmitter<string>();
  public formFiltro: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.filtrar.emit(this.formFiltro.value.filtro);
  }

  private buildForm() {
    this.formFiltro = this.formBuilder.group({
      filtro: ['', [Validators.required]]
    });
  }
}
