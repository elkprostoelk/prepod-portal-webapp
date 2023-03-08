import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.css']
})
export class UserProfileInfoComponent {
  userId: string = '';
  constructor(private readonly userService: UserService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe({
      next: paramMap => {
        if (paramMap.has('userId')) {
          this.userId = paramMap.get('userId')!;
        }
        else if (this.isAuthenticated) {
            let id = userService.parseJwt()!.id;
            router.navigate(['/profile', id]);
        }
        else {
          console.log('No user ID provided!');
          router.navigateByUrl('/login');
        }
      }
    });
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

  logout(): void {
    this.userService.logoutUser();
    this.router.navigateByUrl('/login');
  }
}
