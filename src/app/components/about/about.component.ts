import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private readonly userService: UserService) {}

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get userId(): string | undefined {
    return this.userService.loggedUserSubject.getValue()?.id ?? undefined;
  }
}
