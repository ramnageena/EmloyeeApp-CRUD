import { Employee } from './../Model/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    baseUrl="http://localhost:3000/posts";

  constructor(private _http:HttpClient) { }

  //get All Employee

   getAllEmployee():Observable<Employee[]>{
    return this._http.get<Employee[]>(`${this.baseUrl}`)
   }

   //create a new Employee data

   newEmployee(emp:Employee):Observable<Object>{
    return this._http.post(`${this.baseUrl}`,emp);
   }

   //delete EMployee

   deleteEmployeeData(id:number):Observable<Object>{
    return this._http.delete(`${this.baseUrl}/${id}`)
   }


   //get single Employee

   getEmployeeById(id:number):Observable<Employee>{
    return this._http.get<Employee>(`${this.baseUrl}/${id}`)
   }

   //update the Employee

   editEmployee(id:number,emp:Employee):Observable<Object>{
    return this._http.put(`${this.baseUrl}/${id}`,emp);
   }
}
