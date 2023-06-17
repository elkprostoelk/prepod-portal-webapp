import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QualificationIncreaseDto} from "../../dtos/QualificationIncreaseDto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QualificationIncreaseService {
  qualPath: string = 'qualificationincrease/';
  constructor(private readonly http: HttpClient) {
  }

  getUserQualificationIncreases(userId: string): Observable<QualificationIncreaseDto[]> {
    return this.http.get<QualificationIncreaseDto[]>(`${environment.apiPath}${this.qualPath}all/${userId}`);
  }
}
