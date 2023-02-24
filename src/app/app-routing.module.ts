import { UpdateEmployeeComponent } from './MyComponent/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './MyComponent/create-employee/create-employee.component';
import { EmployeeListComponent } from './MyComponent/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'employeeList',pathMatch:'full'},
  {path:'employeeList',component:EmployeeListComponent},
  {path:'addEmployee',component:CreateEmployeeComponent},
  {path:'updateEmployee/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
