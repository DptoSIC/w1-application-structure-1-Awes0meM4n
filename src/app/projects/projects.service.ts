import { Injectable } from '@angular/core';
import { Project } from './projects/model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public listaProyectos: Project[];
  public filtrarProyectos: (filtro: string) => Project[] | Project;
  public guardarProyecto: (proyecto: Project) => boolean;
  public verProyecto: (id: number) => Project;
  public borrarProyecto: (proyecto: Project) => boolean;
  public actualizarProyecto: (proyecto: Project, proyectoAntiguo?: Project) => boolean;

  constructor() { }

  nuevoProyecto: () => Project;
}
