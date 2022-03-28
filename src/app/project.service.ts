import { Injectable } from '@angular/core';
import { DBconnectionService } from './dbconnection.service';

@Injectable({
  
  providedIn: 'root'
})
export class ProjectService {

  constructor(private projects: DBconnectionService) { }
  
  // projectList:any=[];
  // DialgTitle: string;
  // proj:any;

  // addProject(){
  //   var val ={
  //     id:this.proj.id,
  //     projectName:this.proj.projectName,
  //     clintName:this.proj.clintName,
  //     initiationDate:this.proj.initiationDate,
  //     duration:this.proj.duration
  //   }
  // }
  // updateProject(){
  //   var val ={
  //     id:this.proj.id,
  //     projectName:this.proj.projectName,
  //     clintName:this.proj.clintName,
  //     initiationDate:this.proj.initiationDate,
  //     duration:this.proj.duration
  //   };
  // }

}
