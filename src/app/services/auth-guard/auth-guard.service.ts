import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router) { }

  canActivate(): boolean {
    if (!this.userService.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
