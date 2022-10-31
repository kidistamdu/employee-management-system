import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class PublicGuard implements CanActivate {
    constructor(public router: Router) {}
    
    canActivate(): boolean {
        const canLoad = !!!localStorage.getItem('user')
  
        if(!canLoad) {
          this.router.navigate(['menu']);
        }
      return canLoad
    }
    
}