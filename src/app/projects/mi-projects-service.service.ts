import { ProjectsInterface } from './projects-interface';
import { Injectable } from '@angular/core';
import { Project } from './projects/model/project.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MiProjectsService implements ProjectsInterface {

  listaProyectos: Project[];
  public listaObservable$: Observable<Project[]>;
  listaFiltrada$: Observable<Project[]>;
  urlApi = environment.urlAPI;

  constructor(private httpClient?: HttpClient) {
    // Para carga inicial de proyectos porque se borran si no hay actividad en 30 minutos
    //environment.projects.forEach(p => httpClient.post(environment.urlAPI, p).subscribe());
    this.listaProyectos = [];
    this.listaObservable$ = httpClient.get<Project[]>(this.urlApi).pipe(
      share(),
      tap(proyectos => this.vaciaYRellenaCon(proyectos)));

    //httpClient.delete(environment.urlAPI).subscribe();
  }

  private vaciaYRellenaCon(proyectos: Project[]) {
    this.listaProyectos.splice(0);
    this.listaProyectos.push(...proyectos);
  }

  public filtrarProyectos(filtro: string) {
    if (filtro.startsWith('#')) {
      return this.listaProyectos.filter(p => p.id === parseInt(filtro.slice(1), 10));
    } else {
      return this.listaProyectos.filter(p => p.name.indexOf(filtro) > -1);
    }

    /* Código Semana 3
    if (filtro.startsWith('#')) {
      const resultado = this.listaProyectos.filter(p => p.id === parseInt(filtro.slice(1), 10));
      return resultado.length > 0 ? resultado[0] : null;
    } else {
      return this.listaProyectos.filter(p => p.name.indexOf(filtro) > -1);
    }*/
  }

  public guardarProyecto(proyecto: Project) {
    /* Código Semana 3
    const numProyectos = this.listaProyectos.length;
    this.listaProyectos.push(proyecto);
    return this.listaProyectos.length > numProyectos;*/

    this.httpClient.post(this.urlApi, proyecto).subscribe();

    return true;
  }

  public verProyecto(id: number) {
    const proyecto = this.filtrarProyectos('#' + id);
    if (!(proyecto instanceof Array)) {
      return proyecto;
    } else {
      return proyecto[0];
    }
  }

  public actualizarProyecto(proyecto: Project, proyectoAntiguo?: Project) {
    const index = this.listaProyectos.indexOf(proyectoAntiguo);
    const existe = index > -1;
    if (existe && ((proyectoAntiguo.id === proyecto.id) || !this.nuevoIdExiste(proyecto))) {
      this.listaProyectos[index] = proyecto;
      return true;
    } else {
      console.log('No se puede actualizar ' + JSON.stringify(proyectoAntiguo) + ' con los datos ' + JSON.stringify(proyecto));
      return false;
    }
  }

  public borrarProyecto(proyecto: Project) {
    const index = this.listaProyectos.findIndex(p => p.id === proyecto.id && p.name === proyecto.name);
    const existe = index > -1;
    if (existe) {
      this.listaProyectos.splice(index, 1);
    }
    return existe;
  }

  public proyectoToString(proyecto: Project) {
    return proyecto.name + ' (' + proyecto.name + ')';
  }

  // Pertenece a ProjectsService, no a ProjectsInterface
  nuevoProyecto() {
    return { id: this.generarId(), name: null};
  }

  // Sirve para generar los ids para nuevos proyectos
  generarId() {
    return Math.max(...this.listaIds()) + 1;
  }

  listaIds() {
    const ids = [];
    for (const p of this.listaProyectos) {
      ids.push(p.id);
    }
    return ids;
  }

  // Validar que no hay conflicto de ids
  nuevoIdExiste(proyecto: Project | { id: number }) {
    return this.listaIds().indexOf(proyecto.id) > -1;
  }

}
