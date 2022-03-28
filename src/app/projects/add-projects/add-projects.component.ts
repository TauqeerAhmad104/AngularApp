import {Component, OnInit,Input} from '@angular/core';




@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css'],
})

export class AddProjectsComponent implements OnInit {

   
  constructor() {}

  @Input()
  proj:any; 
   
  ngOnInit() {
    
  }
  onSelectMethod(event) {
    let d = new Date(Date.parse(event));
    this.proj.initiationDate = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
    
  }
  
}

