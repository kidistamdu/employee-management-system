import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user: any;
            

  constructor( private router: Router,public auth : AngularFireAuth) { }
  logout() {
  this.router.navigateByUrl('/login')

    this.auth.signOut()
    localStorage.clear()
  }

  async Signin(email: string, password: string): Promise<boolean> {
    try {
      const {user} = await this.auth.signInWithEmailAndPassword(email, password)
      localStorage.setItem('user',JSON.stringify(user))
      return true
    } catch (e: any) {
      console.error(e)
      return false
      // .... 
    }
    
    }

    async SignUp(email: string, password: string): Promise<boolean> {

      try {
       const {user} =  await this.auth
        .createUserWithEmailAndPassword(email, password)
        localStorage.setItem('user',JSON.stringify(user))
        return true
      } catch (error) {
        console.error(error)
          return false
      }
    
        
    }
}
