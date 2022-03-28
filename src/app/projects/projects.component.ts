import { Component, OnInit } from '@angular/core';
import { DBconnectionService } from '../dbconnection.service';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [MessageService]
})
export class ProjectsComponent implements OnInit {
  displayMaximizable: boolean=false;
  projectList:any=[];
  DialgTitle: string;
  proj:any;

  constructor(private projectdb: DBconnectionService, private messageService: MessageService, private projects: DBconnectionService) { }

  ngOnInit() {
    this.refreshPage();
    this.projectdb.getproject().toPromise().then(projectdata => this.projectList = projectdata);
  }
  
  
  addNewDialog(){
  
    this.proj={
    id:0,
    projectName:'',
    ClintName:'',
    initiationDate:'',
    duration:'',
     EmployeeIds:[]
    }
    this.DialgTitle="Add New Project";
    this.displayMaximizable = true;
    
  }
  closeDialog(){
    this.displayMaximizable=false;
    this.refreshPage();
  }
  addProject(){

    var val ={
      id:this.proj.id,
      projectName:this.proj.projectName,
      clintName:this.proj.clintName,
      initiationDate:this.proj.initiationDate,
      duration:this.proj.duration
    };
    
    if (val.projectName==""){
      let element = document.getElementById('projectName')
      element.className= 'form-control ng-invalid ng-dirty'
    }else{
      let element = document.getElementById('projectName')
      element.className= 'form-control'
    };
    if (val.clintName==""){
      let element = document.getElementById('clintName')
      element.className= 'form-control ng-invalid ng-dirty'
    }else{
      let element = document.getElementById('clintName')
      element.className= 'form-control'
    };
    if (val.initiationDate==""){
      let element = document.getElementById('initiationDate')
      element.className= 'form-control ng-invalid ng-dirty'
    }else{
      let element = document.getElementById('initiationDate')
      element.className= 'form-control'
    };
    if(val.projectName != "" &&
      val.clintName != "" &&
      val.initiationDate !=""
    ){
      this.projectdb.addProject(val).subscribe(res=>{
        this.messageService.add({severity:'success', summary:'Service Message', detail:toString()});
          this.displayMaximizable = false;
          this.refreshPage();  
      });
    }

  }
  updateProject(){
    var val ={
      id:this.proj.id,
      projectName:this.proj.projectName,
      clintName:this.proj.clintName,
      initiationDate:this.proj.initiationDate,
      duration:this.proj.duration
    };
   console.log(val.id, val.clintName, val.initiationDate, val.projectName);
    this.projectdb.updateProject(val).subscribe(res=>{
      this.messageService.add({severity:'success', summary:'Service Message', detail:toString()});
        this.displayMaximizable = false;
        this.refreshPage();
    });   
  }

  editDialog(item){
    this.proj=item;
    this.DialgTitle="Edit Project";
    this.displayMaximizable=true;
  }

  deleteDialog(item){
    if(confirm('you are about to delete project?')){
      this.projectdb.deleteProject(item.id).subscribe(data=>{
        this.messageService.add({severity:'success', summary:'Service Message', detail:toString()});
      this.projectdb.getproject().subscribe(projectdata => this.projectList = projectdata);
      });
    }
  
  }
  
  refreshPage(){
    this.projectdb.getproject().subscribe(data=>{
      this.projectList=data;
    });
  }
}
