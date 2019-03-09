import { Project } from './projects/model/project.model';

export interface ProjectsInterface {
  listaProyectos: Project[];
  filtrarProyectos: (filtro: string) => Project[] | Project; // source= texto en titulo: Project[] | #id : Project con ese id

  // CRUD
  guardarProyecto: (proyecto: Project) => boolean; // true si se crea correctamente
  verProyecto: (id: number) => Project; // por defecto filtrarProyectos('#' + id)
  borrarProyecto: (proyecto: Project) => boolean; // true si se borra correctamente
  actualizarProyecto: (proyecto: Project, proyectoAntiguo?: Project) => boolean; // true si se actualiza correctamente
}
