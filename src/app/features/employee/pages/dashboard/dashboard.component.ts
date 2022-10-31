import { Component, EventEmitter, OnInit, Output,} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/auth/firebase.service';
import { EmployeeService } from '../../service/employee.service';


@Component({
  selector:'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
 
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router,  public auth : FirebaseService, private empService : EmployeeService, )  { }
  @Output() logout:EventEmitter<any> = new EventEmitter()
  totalEmployee = 0
  male = 0
  female = 0
  ngOnInit(): void{

 // get employees
 this.empService.getAllEmployee().subscribe(
  {
  next:(res)=> {
    // count total employee
    this.totalEmployee = res.length
    // count male employee
    this.male = res.filter(v => v.gender == "male").length
    // count female employee
    this.female = res.filter(v => v.gender == "female").length
  },
})

}
handleLogout(){
    
  this.auth.logout()
  this.logout.emit
  
}
}
   