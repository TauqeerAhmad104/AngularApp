import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-employees',
  templateUrl: './add-edit-employees.component.html',
  styleUrls: ['./add-edit-employees.component.css']
})
export class AddEditEmployeesComponent implements OnInit {

  constructor() { }
  @Input() 
  employ:any;
  


  ngOnInit() {

  }
  onSelectMethod(event) {
    let d = new Date(Date.parse(event));
    this.employ.dateOfBirth = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
  }
}
