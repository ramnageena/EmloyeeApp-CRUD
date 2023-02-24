import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';
import { Employee } from './../../Model/employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  id!:number
  employee!:Employee

  constructor(
    private _serviceApi:EmployeeService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this._serviceApi.getEmployeeById(this.id).subscribe(res=>{
      this.employee=res;
    })

  }

  updateEmployee(){
    this._serviceApi.editEmployee(this.id,this.employee).subscribe(res=>{
      this.router.navigate(['employeeList'])
    })
  }


}
