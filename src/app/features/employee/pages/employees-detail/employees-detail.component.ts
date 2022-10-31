import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from 'src/app/features/employee/service/employee.service';
import { Employee } from 'src/app/model/employee';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmployeeContractsServices } from '../../service/employee-contracts.services';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.css']
})
export class EmployeesDetailComponent implements OnInit {
  
  file!: File
  empDetail !: Employee;

  empObj : Employee= new Employee();
  empList : Employee[] = [];

  employeeId!: number
  employeeDetails$: Observable<Employee> = this.route.paramMap.pipe(switchMap(params => {
    this.employeeId = Number(params.get('id'));
    return this.empService.getEmployeeById(this.employeeId)
  }))

  empFormatted: any= []
  constructor( private empService : EmployeeService, private route: ActivatedRoute,private empContractService: EmployeeContractsServices ) { }
  getContractByEmpId(){
  
    this.employeeId = this.route.snapshot.params['id'];
    this.empContractService.getAllContract().subscribe(
      data => {
        // this.contracts = data
console.log(data, 'data')
      }
    )
 
}

  ngOnInit(): void {
    this.employeeDetails$.subscribe(
      detail => {
        this.empDetail = detail
        Object.keys(this.empDetail).forEach(key => {
          if(key !== "id" && key != "image") {
            this.empFormatted.push({
              title: key.toUpperCase(),
              value: this.empDetail[key as keyof Employee]
            })
          }
        })
      }
    ) 

    
    this.getContractByEmpId()
   

  }


  
 
  

  



}
