import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/auth/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth : FirebaseService) { }
   
  isSignedIn = false;
  ngOnInit(): void {

    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true;
    else
    this.isSignedIn= false;

  }
  async onSignUp(email:string, password:string){
    this.isSignedIn = await this.auth.SignUp(email,password)
  }

  
}
