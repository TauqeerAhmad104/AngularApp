import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import {AddProjectsComponent } from './projects/add-projects/add-projects.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEditEmployeesComponent } from './employees/add-edit-employees/add-edit-employees.component';
import { AssignmentsComponent } from './assignments/assignments.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

import {PickListModule} from 'primeng/picklist';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePipe } from '@angular/common';








@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    EmployeesComponent,
    AddEditEmployeesComponent,
    AssignmentsComponent,
    AddProjectsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    PanelModule,
    ToastModule,
    PickListModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    AutoCompleteModule,
    ReactiveFormsModule,


    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
