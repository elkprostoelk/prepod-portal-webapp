import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UserProfileInfoComponent} from "./components/user-profile-info/user-profile-info.component";
import {TeachersListComponent} from "./components/teachers-list/teachers-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {NewTeacherComponent} from "./components/new-teacher/new-teacher.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {AboutComponent} from "./components/about/about.component";
import {
  UserProfileMainInfoComponent
} from "./components/user-profile-main-info/user-profile-main-info.component";
import {
  UserProfileScienceWorkComponent
} from "./components/user-profile-science-work/user-profile-science-work.component";
import {
  UserProfileScientificReportsComponent
} from "./components/user-profile-scientific-reports/user-profile-scientific-reports.component";
import {UserProfileProjectsComponent} from "./components/user-profile-projects/user-profile-projects.component";

const canActivate = () => inject(AuthGuardService).canActivate();

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserProfileInfoComponent },
  {
    path: 'profile/:userId',
    component: UserProfileInfoComponent,
    children: [
      { path: 'main-info', component: UserProfileMainInfoComponent },
      { path: 'science-work', component: UserProfileScienceWorkComponent },
      { path: 'scientific-reports', component: UserProfileScientificReportsComponent },
      { path: 'projects', component: UserProfileProjectsComponent },
    ]
  },
  { path: 'teachers-list', component: TeachersListComponent },
  { path: 'new-teacher', component: NewTeacherComponent, canActivate: [canActivate] },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
