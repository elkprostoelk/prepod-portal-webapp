import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {UserTokenDto} from "../../dtos/UserTokenDto";
import { JwtHelperService } from '@auth0/angular-jwt';
import {UserDto} from "../../dtos/UserDto";
import {tokenGetter} from "../../app.module";
import {ShortUserInfoDto} from "../../dtos/ShortUserInfoDto";
import {ServiceTypedResult} from "../../dtos/ServiceResult";
import {CreatedUserDto} from "../../dtos/CreatedUserDto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserSubject: BehaviorSubject<UserDto | undefined>;
  public loggedInUser: Observable<UserDto | undefined>;
  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtHelperService) {
    let user = this.parseJwt();
    this.loggedUserSubject = new BehaviorSubject<UserDto | undefined>(user);
    this.loggedInUser = this.loggedUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<UserTokenDto> {
    return this.http.post<UserTokenDto>(`${environment.apiPath}auth/login`, {
      email,
      password
    }).pipe(map(response => {
      localStorage.setItem('jwt', response.jwt);
      this.loggedUserSubject.next(this.parseJwt()!);
      return response;
    }));
  }

  getAllTeachersList(): Observable<ServiceTypedResult<ShortUserInfoDto[]>> {
    return this.http.get<ServiceTypedResult<ShortUserInfoDto[]>>(`${environment.apiPath}user/teachers-list`);
  }

  logoutUser() {
    localStorage.removeItem('jwt');
    this.loggedUserSubject.next(undefined);
  }

  get isAuthenticated(): boolean {
    let token = tokenGetter();
    return !this.jwtService.isTokenExpired(token) &&
      this.loggedUserSubject.getValue() !== undefined;
  }

  get isAdmin(): boolean {
    let user = this.parseJwt();
    return user !== undefined && user.role === 'administrator';
  }

  get isProfilesCreator(): boolean {
    let user = this.parseJwt();
    return user !== undefined && user.role === 'profiles creator';
  }

  parseJwt(): UserDto | undefined {
    const token = tokenGetter();
    if (token) {
      const identity = JSON.parse(atob(token.split('.')[1]));
      const idClaim: string = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';
      const nameClaim: string = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
      const roleClaim: string = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
      const expires: Date = new Date(0);
      expires.setUTCSeconds(identity['exp']);
      return {
        id: identity[idClaim],
        userName: identity[nameClaim],
        role: identity[roleClaim],
        expires
      };
    }
    return undefined;
  }

  registerTeacher(value: any): Observable<CreatedUserDto> {
    return this.http.post<CreatedUserDto>(`${environment.apiPath}user/new-teacher`, value);
  }
}
