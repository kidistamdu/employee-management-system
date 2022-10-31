import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmpContracts, Employee } from 'src/app/model/employee';

@Injectable({
    providedIn: 'root'
  })

  export class EmployeeContractsServices{

    contractURL : string; 
  

    constructor(private http : HttpClient) { 

        this.contractURL = 'http://localhost:3000/contract';

  }

  addContract(cont: EmpContracts):Observable<EmpContracts>{
    return this.http.post<EmpContracts>(this.contractURL, cont);
  }

  getAllContract(): Observable<EmpContracts[]>{
      return this.http.get<EmpContracts[]>(this.contractURL)

  }
  updateContract(cont:EmpContracts) : Observable<EmpContracts>{
    return this.http.put<EmpContracts>(this.contractURL+'/'+cont.employeeId,cont)
  }
 
  deleteContract(cont:EmpContracts):Observable<EmpContracts>{
      return this.http.delete<EmpContracts>(this.contractURL + '/' + cont.id);
  
  }

}
