import { MiProjectsService } from './mi-projects-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { EditorProjectComponent } from './editor-project/editor-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { FormProjectComponent } from './form-project/form-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { FilterProjectsFormComponent } from './filter-projects-form/filter-projects-form.component';
import { EditorProjectFormComponent } from './editor-project-form/editor-project-form.component';
import { NewProjectFormComponent } from './new-project-form/new-project-form.component';
import { ProjectsService } from './projects.service';
import { environment } from 'src/environments/environment';

const cultureFactory = (projectsService: ProjectsService) => {
  if (environment.projectsService === 'miProjectsService') {
    return new MiProjectsService();
  } else {
    return null;
  }
}//new DummyProjectsService();   } };

@NgModule({
  declarations: [
    ProjectsComponent,
    EditorProjectComponent,
    NewProjectComponent,
    FormProjectComponent,
    DashboardComponent,
    ProjectsListComponent,
    FilterProjectsFormComponent,
    EditorProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule],
  providers: [
    {
      provide: ProjectsService,
      //  useClass: MiProjectsService => Pasamos a contruirlo usando el environment
      useFactory: cultureFactory
      // , deps: [ProjectsService] // ProjectsService no depende de nada en su contruccion
    }
  ]
})
export class ProjectsModule {}
