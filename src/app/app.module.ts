import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {AuthInterceptor} from "./interceptors/auth/auth.interceptor";
import { UserProfileInfoComponent } from './components/user-profile-info/user-profile-info.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileInfoComponent,
    TeachersListComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      JwtModule.forRoot({
        config: { tokenGetter }
      }),
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
