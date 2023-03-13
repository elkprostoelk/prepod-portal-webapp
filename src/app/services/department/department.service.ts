import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DepartmentDto} from "../../dtos/DepartmentDto";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private readonly http: HttpClient) { }

  getAllDepartments(): Observable<DepartmentDto[]> {
    return this.http.get<DepartmentDto[]>(`${environment.apiPath}department/all`);
  }
}
