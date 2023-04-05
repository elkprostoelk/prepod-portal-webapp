import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserMainInfoDto} from "../../dtos/UserMainInfoDto";
import {isNullOrUndefined} from "../../helping-methods";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-user-profile-main-info',
  templateUrl: './user-profile-main-info.component.html',
  styleUrls: ['./user-profile-main-info.component.css', '../../app.component.css']
})
export class UserProfileMainInfoComponent {

  isNullOrUndefined = isNullOrUndefined;
  userMainInfo$: BehaviorSubject<UserMainInfoDto | undefined> = new BehaviorSubject<UserMainInfoDto | undefined>(undefined);
  userId: string = '';
  constructor(private readonly userService: UserService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
    activatedRoute.parent?.paramMap.subscribe({
      next: paramMap => {
        if (paramMap.has('userId')) {
          this.userId = paramMap.get('userId')!;
        }
        else if (this.isAuthenticated) {
          this.userId = userService.parseJwt()!.id;
        }
      }
    });
    userService.getUserMainInfo(this.userId)
      .subscribe({
        next: dto => this.userMainInfo$.next(dto)
      });
  }

  get isAdmin(): boolean {
    return this.isAuthenticated
      && this.userService.isAdmin;
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get isMyPage(): boolean {
    return this.isAuthenticated
      && this.userService.loggedUserSubject.getValue()?.id === this.userId;
  }

  get loggedUserId(): string | undefined {
    return this.userService.loggedUserSubject.getValue()?.id;
  }

  get noMainInfoProvided(): boolean {
    return isNullOrUndefined(this.userMainInfo$.getValue()?.town)
      && isNullOrUndefined(this.userMainInfo$.getValue()?.homeTown)
      && isNullOrUndefined(this.userMainInfo$.getValue()?.birthDate)
      && isNullOrUndefined(this.userMainInfo$.getValue()?.academicTitle)
      && isNullOrUndefined(this.userMainInfo$.getValue()?.scienceDegree)
      && !this.isMyPage
      && !this.isAdmin;
  }

  get noCareerInfoProvided(): boolean {
    return isNullOrUndefined(this.userMainInfo$.getValue()?.workplaceLocation)
        && isNullOrUndefined(this.userMainInfo$.getValue()?.workplacePosition)
        && !this.isMyPage
        && !this.isAdmin;
  }

  get noEducationInfoProvided(): boolean {
    return this.userMainInfo$.getValue()?.educations.length === 0;
  }

  isSeparatorShown(arrayLength: number | undefined, i: number): boolean {
    return (arrayLength ?? 0) > 1 && (i + 1) !== (arrayLength ?? 0);
  }
}
