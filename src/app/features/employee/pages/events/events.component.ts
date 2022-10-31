import { Component, EventEmitter, OnInit, Output,} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/auth/firebase.service';
import { EmployeeService } from '../../service/employee.service';


@Component({
  selector:'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
 
})
export class EventsComponent implements OnInit {

  constructor( private router: Router,  public auth : FirebaseService, private empService : EmployeeService, )  { }
 
  ngOnInit(): void{



}


}
   