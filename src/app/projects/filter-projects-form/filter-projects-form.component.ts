import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {

  filtro = '';
  @Output() filtrar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.filtrar.emit(this.filtro);
  }

}
