import { Component, OnInit } from '@angular/core';
import { DBconnectionService } from '../dbconnection.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { element } from 'protractor';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [MessageService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeedb: DBconnectionService, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

   displayMaximizable: boolean;
   employeeList:any=[];
   DialgTitle: string;
   employ:any

  ngOnInit() {
     this.primengConfig.ripple = true;
    this.employeedb.getEmployee().toPromise().then(employeedata => this.employeeList = employeedata);
  }
  addNewDialogEmp(){
    this.employ={
    id:0,
    firstName:'',
    lastName:'',
    dateOfBirth:'',
    phoneNo:'',
    position:'',
    }
    this.DialgTitle="Add New Employee";
    this.displayMaximizable = true;

  }
  addEmployee(){
    var val ={
      id:this.employ.id,
      firstName:this.employ.firstName,
      lastName:this.employ.lastName,
      dateOfBirth:this.employ.dateOfBirth,
      phoneNo:this.employ.phoneNo,
      position:this.employ.position
    };
    if (val.firstName==""){
      let element =document.getElementById('firstName')
      element.className = 'form-control ng-invalid ng-dirty'
    }else{
      let element =document.getElementById('firstName')
      element.className = 'form-control'
    }
    if(val.lastName==""){
      let element = document.getElementById('lastName')
      element.className = 'form-control ng-invalid ng-dirty'
    }else{
      let element = document.getElementById('lastName')
      element.className = 'form-control'
    };
    if(val.dateOfBirth==""){
      let element = document.getElementById('dateOfBirth')
      element.className = 'form-control ng-invalid ng-dirty'
    }else{
      let element = document.getElementById('dateOfBirth')
      element.className = 'form-control'
    };
    if(val.firstName !="" &&
    val.lastName !="" &&
    val.dateOfBirth !=""
    )
    {
      if(confirm('Employee Has Been Added')){
        this.employeedb.addEmployee(val).subscribe(res=>{
          this.messageService.add({severity:'success', summary:'Service Message', detail:toString()});
            this.displayMaximizable=false;
            this.refreshPage();
        });
      }
    }
     
  }
  updateEmployee(){
    var val ={
      id:this.employ.id,
      firstName:this.employ.firstName,
      lastName:this.employ.lastName,
      dateOfBirth:this.employ.dateOfBirth,
      phoneNo:this.employ.phoneNo,
      position:this.employ.position
    };
     if(confirm('Employee Has Been Added')){
      this.employeedb.updateEmployee(val).subscribe(res=>{
        this.messageService.add({severity:'success', summary:'Service Message', detail:toString()});
          this.displayMaximizable=false;
          this.refreshPage();
      });
    }
  }

  editDialogEmp(item){
    this.employ=item;
    this.DialgTitle="Edit Employee";
    this.displayMaximizable=true;
  }

  deleteDialogEmp(item){
    if(confirm('You are about to delete Employee?')){
      this.employeedb.deleteEmployee(item.id).subscribe(data=>{
        this.messageService.add({severity:'success', summary:'Service Message', detail:toString()});
      this.employeedb.getEmployee().subscribe(employeedata => this.employeeList = employeedata);
      });
    }
  
  }
  
  closeEmployee(){
    this.displayMaximizable=false;
    this.refreshPage();
  }

  refreshPage(){
    this.employeedb.getEmployee().subscribe(data=>{
      this.employeeList=data;
    });
  }
}

