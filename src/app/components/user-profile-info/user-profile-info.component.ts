import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserAvatarAndNameDto} from "../../dtos/UserAvatarAndNameDto";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.css']
})
export class UserProfileInfoComponent {
  activeStateClasses: string[] = ['active', '', '', ''];
  serverPath: string = environment.serverPath;
  userId: string = '';
  nameAndAvatar: UserAvatarAndNameDto | undefined;
  constructor(private readonly userService: UserService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe({
      next: paramMap => {
        if (paramMap.has('userId')) {
          this.userId = paramMap.get('userId')!;
          this.getUserAvatarAndName();
        }
        else if (this.isAuthenticated) {
          this.userId = userService.parseJwt()!.id;
          this.getUserAvatarAndName();
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

  get isMyPage(): boolean {
    return this.userId === this.loggedUserId;
  }

  get loggedUserId(): string | undefined {
    return this.userService.loggedUserSubject.getValue()?.id ?? undefined;
  }

  logout(): void {
    this.userService.logoutUser();
    this.router.navigateByUrl('/login');
  }

  changeActiveState(tabNumber: number) {
    this.activeStateClasses.forEach((cssClass, i, arr) => {
      arr[i] = (i === tabNumber ? 'active' : '');
    });
  }

  private getUserAvatarAndName(): void {
    this.userService.getUserAvatarAndName(this.userId).subscribe({
      next: (dto: UserAvatarAndNameDto) => {
        this.nameAndAvatar = dto;
        this.router.navigate(['/profile', this.userId, 'main-info']);
      }
    });
  }
}
