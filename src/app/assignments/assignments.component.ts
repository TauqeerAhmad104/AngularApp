import { Component, OnInit } from '@angular/core';
import { DBconnectionService } from '../dbconnection.service';
import { EmployeeModel } from '../employee-model';
import { ProjectModel } from '../project-model';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  employees: EmployeeModel[];
  projects: ProjectModel[];
  selectedProject: ProjectModel;

  constructor(private Service: DBconnectionService, private primengConfig: PrimeNGConfig) { 
    this.Service.getEmployee().toPromise().then(data => this.employees = data);
    this.Service.getproject().toPromise().then(data => 
      {
        this.projects = data;
    });
  }


  sourceEmployees: EmployeeModel[];
  selectedEmployees: EmployeeModel[];
  targetEmployees: EmployeeModel[];




  ngOnInit() {  
    if(this.selectedProject != null){
      this.Service.getAvailableEmployeeByProjectId(this.selectedProject.id).toPromise().then(Employees => 
        {
          this.sourceEmployees = Employees;
          console.log("console");
          console.log(Employees);
        }
        );
      this.Service.getAssignedEmployeeByProjectId(this.selectedProject.id).toPromise().then(Employees => this.targetEmployees = Employees);
      this.primengConfig.ripple = true;
    }
    
  }

  onChange(event) {
    if(this.selectedProject != null){
      this.Service.getAvailableEmployeeByProjectId(this.selectedProject.id).toPromise().then(Employees => 
        {
          this.sourceEmployees = Employees;
          console.log("console");
          console.log(Employees);
        }
        );
      this.Service.getAssignedEmployeeByProjectId(this.selectedProject.id).toPromise().then(Employees => this.targetEmployees = Employees);
      this.primengConfig.ripple = true;
    }  
  }
  onMovetoSource(event){
    event.items.forEach(item => {
      this.sourceEmployees = this.employees
        console.log(item);
       // remolve from projectempolyee
       this.Service.deleteProjectEmployee(this.selectedProject.id,item.id).toPromise().then(res => 
        {          
          console.log("deleted*****"+res);
        }
        );
       //this.Service.deleteProjectEmployee(this.selectedProject.id,item.id);
        console.log("project id: "+ this.selectedProject.id+" employee id: "+item.id);
        //insert into projectemployee  "project id: "+ this.selectedProject.id+" employee id: "+item.id            
     });
  }
  onMoveToTarget(event){
    event.items.forEach(item => {
      //this.Service.addProjectEmployee(this.selectedProject.id,item.id);
      this.Service.addProjectEmployee(this.selectedProject.id,item.id).toPromise().then(res => 
        {          
          // console.log("added*****"+res);
        }
        );   
        this.Service.getAvailableEmployeeByProjectId(this.selectedProject.id).toPromise().then(Employees =>  
          {
            this.sourceEmployees = Employees;
            // console.log("console");
            // console.log(Employees);
          }
          );
        this.Service.getAssignedEmployeeByProjectId(this.selectedProject.id).toPromise().then(Employees => this.targetEmployees = Employees);
             
      // remolve from projectempolyee
      //delete into projectemployee  "project id: "+ this.selectedProject.id+" employee id: "+item.id  
   });
  }

}