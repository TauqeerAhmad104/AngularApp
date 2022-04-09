import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DBconnectionService {
  readonly APIUrl="http://angular-app-api:80/api";

  constructor(private http: HttpClient) { }
  //projects connection

  getproject(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/project');
  }
  addProject(val:any){
    return this.http.post(this.APIUrl+'/project',val);
  }
  updateProject(val:any){
    return this.http.put(this.APIUrl+'/project',val);
  }
  deleteProject(val:any){
    return this.http.delete(this.APIUrl+'/project/'+val);
  }
// Employee Connection
  getEmployee(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee');
  }
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }

  // Assignment API connection 
  
  getAssignedEmployeeByProjectId(project_id): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/projectEmployee/Assigned/'+ project_id);
  }
  getAvailableEmployeeByProjectId(project_id): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/projectEmployee/Available/'+ project_id);
  }

  addProjectEmployee(idProject:any, idEmployee:any){
    var val = {
      id:0,
      project_Id: idProject,
      Employee_id: idEmployee,
    };
    return this.http.post(this.APIUrl+'/ProjectEmployee', val);
  }
  deleteProjectEmployee(idProject:any, idEmployee:any){
    return this.http.get(this.APIUrl+'/ProjectEmployee/delete/'+idProject+"/"+idEmployee);
    // var val = "{id:10, project_Id:"+idProject+",Employee_id:" +idEmployee+"}";
    // return this.http.post(this.APIUrl+'/ProjectEmployee/delete', val);
  }
}
