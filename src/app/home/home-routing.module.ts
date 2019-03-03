import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from '../shared/heroes/heroes.component';
import { ProjectsComponent } from '../projects/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'projects',
    loadChildren: '../projects/projects.module#ProjectsModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
