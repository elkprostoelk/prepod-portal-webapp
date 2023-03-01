import { Component } from '@angular/core';
import {UserService} from "./services/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prepod-portal-webapp';
  currentYear: Date = new Date();
  constructor(private readonly userService: UserService) {
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get isAdmin(): boolean {
    return this.userService.isAdmin;
  }
}
