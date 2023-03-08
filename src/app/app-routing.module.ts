import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UserProfileInfoComponent} from "./components/user-profile-info/user-profile-info.component";
import {TeachersListComponent} from "./components/teachers-list/teachers-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile/:userId', component: UserProfileInfoComponent },
  { path: 'teachers-list', component: TeachersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
