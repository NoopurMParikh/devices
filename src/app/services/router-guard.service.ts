import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { 

  }

  canActivate(): boolean {
    if(!this.userService.isLoggedIn()) {
      this.router.navigate(['login', 'true'])
      return false;
    }
    return true;
  }
}
