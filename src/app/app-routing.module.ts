import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddProjectsComponent } from './projects/add-projects/add-projects.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {path:'projects',component:ProjectsComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'assignments',component:AssignmentsComponent},
  {path: 'newproject', component: AddProjectsComponent},
  {path: 'id/edit', component: AddProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
