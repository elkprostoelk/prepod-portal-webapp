import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {PublicationDto} from "../../dtos/PublicationDto";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  publicationsPath: string = 'publication/';
  articlesPath: string = 'article/';
  lectureThesesPath: string = 'lecturetheses/';
  monographsPath: string = 'monograph/';
  schoolBooksPath: string = 'schoolbook/'
  constructor(private readonly http: HttpClient) { }

  getPublications(userId: string): Observable<PublicationDto[]> {
    return this.http.get<PublicationDto[]>(`${environment.apiPath}${this.publicationsPath}all/${userId}`);
  }

  deletePublication(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiPath}${this.publicationsPath}${id}`);
  }
}
