import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {BriefUserInfoDto} from "../../dtos/BriefUserInfoDto";
import {isNullOrUndefined} from "../../helping-methods";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent {
  isNullOrUndefined = isNullOrUndefined;
  teachers$: BehaviorSubject<BriefUserInfoDto[] | undefined> =
    new BehaviorSubject<BriefUserInfoDto[] | undefined>(undefined);
  constructor(
    private readonly userService: UserService,
    private readonly router: Router) {
    userService.getAllTeachersList().subscribe({
      next: teachers => {
        console.log(teachers);
        this.teachers$.next(teachers.container);
      }
    })
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get userId(): string | undefined {
    return this.userService.loggedUserSubject.getValue()?.id ?? undefined;
  }
}
