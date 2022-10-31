import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class PrivateGuard implements CanActivate {
    constructor(public router: Router) {}
  canActivate(): boolean {
      const canLoad = !!localStorage.getItem('user')

      if(!canLoad) {
        this.router.navigate(['login']);
      }
    return canLoad
  }

  
}