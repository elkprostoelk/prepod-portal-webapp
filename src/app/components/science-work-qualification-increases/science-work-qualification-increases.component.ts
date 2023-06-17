import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {BehaviorSubject} from "rxjs";
import {QualificationIncreaseDto} from "../../dtos/QualificationIncreaseDto";
import {QualificationIncreaseService} from "../../services/qualification-increase/qualification-increase.service";

@Component({
  selector: 'app-science-work-qualification-increases',
  templateUrl: './science-work-qualification-increases.component.html',
  styleUrls: ['./science-work-qualification-increases.component.css']
})
export class ScienceWorkQualificationIncreasesComponent implements OnInit {
  @Input() userId: string = '';
  qualificationIncreases$: BehaviorSubject<QualificationIncreaseDto[] | null> = new BehaviorSubject<QualificationIncreaseDto[] | null>(null);
  constructor(private readonly userService: UserService,
              private readonly qualificationService: QualificationIncreaseService) {
  }

  get isAdmin(): boolean {
    return this.userService.isAdmin;
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get isMe(): boolean {
    return this.isAuthenticated
      && this.userService.loggedUserSubject.getValue()?.id === this.userId;
  }

  ngOnInit(): void {
    this.qualificationService.getUserQualificationIncreases(this.userId)
      .subscribe({
        next: value => this.qualificationIncreases$.next(value),
        error: err => console.log(err)
      });
  }

  isMyQualIncrease(qualIncrease: QualificationIncreaseDto): boolean {
    return this.userService.loggedUserSubject.getValue()?.id === qualIncrease.userId;
  }

  get filterLinkMargin(): string {
    return this.isAdmin || this.isAuthenticated && this.isMe ? 'margin-left:5rem' : '';
  }
}
