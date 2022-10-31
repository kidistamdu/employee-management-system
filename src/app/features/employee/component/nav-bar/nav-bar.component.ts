import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "src/app/model/employee";
import { FirebaseService } from "src/app/service/auth/firebase.service";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
  })
  export class NavBarComponent {

    @Input() empDetail!: Employee
     
    
    
    



    constructor( private router: Router,  public auth : FirebaseService)  { }

  
  
    }
  
  