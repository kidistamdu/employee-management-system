import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/service/auth/firebase.service";


@Component({
    selector: 'app-logout-button',
    templateUrl: './logout-button.component.html',
  })
  export class LogoutButtonComponent {
 
    @Output() logout:EventEmitter<any> = new EventEmitter()


    constructor( private router: Router,  public auth : FirebaseService)  { }

    handleLogout(){
    
         this.auth.logout()
         this.router.navigate(['login'])
         this.logout.emit
      }
  }