import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeUk from "@angular/common/locales/uk";
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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';
import { AboutComponent } from './components/about/about.component';
import { UserProfileMainInfoComponent } from './components/user-profile-main-info/user-profile-main-info.component';
import {registerLocaleData} from "@angular/common";
import { UserProfileScienceWorkComponent } from './components/user-profile-science-work/user-profile-science-work.component';
import { UserProfileScientificReportsComponent } from './components/user-profile-scientific-reports/user-profile-scientific-reports.component';
import { UserProfileProjectsComponent } from './components/user-profile-projects/user-profile-projects.component';
import { ScienceWorkQualificationIncreasesComponent } from './components/science-work-qualification-increases/science-work-qualification-increases.component';
import { ScienceWorkPublicationsComponent } from './components/science-work-publications/science-work-publications.component';
import { ScienceWorkConferencesComponent } from './components/science-work-conferences/science-work-conferences.component';
import { ScienceWorkSecurityDocumentsComponent } from './components/science-work-security-documents/science-work-security-documents.component';
registerLocaleData(localeUk);

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileInfoComponent,
    TeachersListComponent,
    NotFoundComponent,
    NewTeacherComponent,
    AboutComponent,
    UserProfileMainInfoComponent,
    UserProfileScienceWorkComponent,
    UserProfileScientificReportsComponent,
    UserProfileProjectsComponent,
    ScienceWorkQualificationIncreasesComponent,
    ScienceWorkPublicationsComponent,
    ScienceWorkConferencesComponent,
    ScienceWorkSecurityDocumentsComponent
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
