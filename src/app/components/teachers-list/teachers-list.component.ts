import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {ShortUserInfoDto} from "../../dtos/ShortUserInfoDto";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent {
  teachers$: BehaviorSubject<ShortUserInfoDto[] | undefined> =
    new BehaviorSubject<ShortUserInfoDto[] | undefined>(undefined);
  constructor(
    private readonly userService: UserService,
    private readonly router: Router) {
    userService.getAllTeachersList().subscribe({
      next: teachers => {
        this.teachers$.next(teachers.container);
      }
    })
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get userId(): string | undefined {
    return this.userService.parseJwt()?.id ?? undefined;
  }
}
