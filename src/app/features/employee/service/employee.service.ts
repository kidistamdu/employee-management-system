import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../../../model/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpURL : string;
  deleteEmpURL: string;
 
  

  constructor(private http : HttpClient) { 


    this.addEmpURL= 'http://localhost:3000/employee'
    this.getEmpURL= 'http://localhost:3000/employee'
    this.updateEmpURL = 'http://localhost:3000/employee'
    this.deleteEmpURL = 'http://localhost:3000/employee'
   


  }


   addEmployee(emp : Employee): Observable<Employee>{
     return this.http.post<Employee>(this.addEmpURL, emp);
   }
   
   getAllEmployee() : Observable<Employee[]>{
     return this.http.get<Employee[]>(this.getEmpURL);
   }

   updateEmployee(emp : Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.updateEmpURL +'/'+ emp.id, emp)
   }
   deleteEmployee(emp : Employee) : Observable<Employee>{
     return this.http.delete<Employee>(this.deleteEmpURL +'/'+ emp.id);
   }
   getEmployeeById(id: number){
    return this.http.get<Employee>(this.getEmpURL+'/'+id);
   }

   
  
}
