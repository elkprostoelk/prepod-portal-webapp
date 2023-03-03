import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(
    private readonly builder: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router) {
    this.loginForm = builder.group({
      email: ['', [Validators.email, Validators.required, Validators.maxLength(256)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]]
    });
  }

  login(value: any): void {
    this.userService.login(value.email, value.password)
      .subscribe({
        next: () => {
          console.log('Login succeeded!');
          this.router.navigateByUrl('/');
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
  }
}