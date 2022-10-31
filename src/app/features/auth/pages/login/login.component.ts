import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseService } from 'src/app/service/auth/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  constructor(private auth : FirebaseService, private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true;
    else
    this.isSignedIn= false;
  }

async onSignin(email:string, password:string){
  this.isSignedIn = await this.auth.Signin(email,password)
  if(this.isSignedIn) {
    this.router.navigate(['/dashboard'])
  }
}

}
