import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-user-profile-science-work',
  templateUrl: './user-profile-science-work.component.html',
  styleUrls: ['./user-profile-science-work.component.css']
})
export class UserProfileScienceWorkComponent {
  userId: string = '';
  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly userService: UserService) {
    activatedRoute.parent?.paramMap.subscribe({
      next: paramMap => {
        if (paramMap.has('userId')) {
          this.userId = paramMap.get('userId')!;
        }
        else if (this.userService.isAuthenticated) {
          this.userId = userService.parseJwt()!.id;
        }
      }
    });
  }
}
