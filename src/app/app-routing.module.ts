import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {UserProfileInfoComponent} from "./components/user-profile-info/user-profile-info.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: ':userId', component: UserProfileInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
