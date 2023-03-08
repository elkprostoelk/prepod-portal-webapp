import { Component } from '@angular/core';
import {UserService} from "./services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prepod-portal-webapp';
  currentYear: Date = new Date();
  constructor(private readonly userService: UserService,
              private readonly router: Router) {
    if (!this.isAuthenticated) {
      router.navigateByUrl('/login');
    }
    else {
      router.navigate(['/profile', userService.parseJwt()!.id]);
    }
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get isAdmin(): boolean {
    return this.userService.isAdmin;
  }

  get isProfilesCreator(): boolean {
    return this.userService.isProfilesCreator;
  }
}
