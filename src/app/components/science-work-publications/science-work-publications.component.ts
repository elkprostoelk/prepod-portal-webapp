import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {BehaviorSubject} from "rxjs";
import {PublicationService} from "../../services/publication/publication.service";
import {PublicationDto} from "../../dtos/PublicationDto";
import {ArticleDto} from "../../dtos/ArticleDto";
import {MonographDto} from "../../dtos/MonographDto";
import {SchoolBookDto} from "../../dtos/SchoolBookDto";
import {LectureThesesDto} from "../../dtos/LectureThesesDto";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-science-work-publications',
  templateUrl: './science-work-publications.component.html',
  styleUrls: ['./science-work-publications.component.css']
})
export class ScienceWorkPublicationsComponent implements OnInit {
  @Input() userId: string = '';
  publications$: BehaviorSubject<PublicationDto[] | null> = new BehaviorSubject<PublicationDto[] | null>(null);
  constructor(private readonly userService: UserService,
              private readonly publicationService: PublicationService) {  }

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

  get filterLinkMargin(): string {
    return this.isAdmin || this.isAuthenticated && this.isMe ? 'margin-left:5rem' : '';
  }

  isMyPublication(publication: PublicationDto): boolean {
    return publication.authors.some(author => author.id === this.userService.loggedUserSubject.getValue()?.id);
  }

  getArticleDto(publication: PublicationDto): ArticleDto | undefined {
    return publication instanceof ArticleDto ? publication as ArticleDto : undefined;
  }

  getMonographDto(publication: PublicationDto) : MonographDto | undefined {
    return publication instanceof MonographDto ? publication as MonographDto : undefined;
  }

  getSchoolBookDto(publication: PublicationDto): SchoolBookDto | undefined {
    return publication instanceof SchoolBookDto ? publication as SchoolBookDto : undefined;
  }

  getLectureThesesDto(publication: PublicationDto): LectureThesesDto | undefined {
    return publication instanceof LectureThesesDto ? publication as LectureThesesDto : undefined;
  }

  removePublication(id: number): void {
    this.publicationService.deletePublication(id)
      .subscribe({
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
  }

  ngOnInit(): void {
    this.publicationService.getPublications(this.userId)
      .subscribe({
        next: publications => {
          this.publications$.next(publications);
        }
      });
  }
}
