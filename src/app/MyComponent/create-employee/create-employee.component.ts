import { Employee } from './../../Model/employee';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employeeObj:Employee=new Employee();

   constructor(
    private serviceApi:EmployeeService,
    private router:Router
   ){}

  ngOnInit(): void {

  }

  createEmployee(){
    this.serviceApi.newEmployee(this.employeeObj).subscribe(res=>{

      this.router.navigate(['/employeeList'])
    })
  }

}
