import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorProjectFormComponent } from './editor-project-form/editor-project-form.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'new',
    // component: NewProjectComponent => Este componente ya no es necesario
    component: NewProjectFormComponent
  },
  {
    path: ':id',
    // component: EditorProjectComponent => Este componente ya no es necesario
    component: EditorProjectFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
