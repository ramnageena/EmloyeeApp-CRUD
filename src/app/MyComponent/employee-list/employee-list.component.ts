import { EmployeeService } from './../../Service/employee.service';
import { Employee } from './../../Model/employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employee!:Employee[]

  constructor(private _serviceApi:EmployeeService){}

   ngOnInit(): void {
      this.getALlEmployeeList();

   }

  getALlEmployeeList(){
    this._serviceApi.getAllEmployee().subscribe(res=>{
      this.employee=res;
    })
  }

  deleteEmployee(id:number){
    this._serviceApi.deleteEmployeeData(id).subscribe(res=>{
       this.getALlEmployeeList();
    })
  }
}
