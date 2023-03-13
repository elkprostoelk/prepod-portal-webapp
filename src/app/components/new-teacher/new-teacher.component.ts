import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepartmentDto} from "../../dtos/DepartmentDto";
import {BehaviorSubject} from "rxjs";
import {DepartmentService} from "../../services/department/department.service";

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent {

  departments$: BehaviorSubject<DepartmentDto[] | undefined>
    = new BehaviorSubject<DepartmentDto[] | undefined>(undefined);
  newTeacherForm: FormGroup;
  scientometricDbProfiles: FormArray;
  constructor(private readonly router: Router,
              private readonly userService: UserService,
              private readonly formBuilder: FormBuilder,
              private readonly departmentService: DepartmentService) {
    this.scientometricDbProfiles = formBuilder.array([]);
    this.newTeacherForm = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      departmentId: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      scientometricDbProfiles: this.scientometricDbProfiles
    });
    departmentService.getAllDepartments().subscribe({
      next: departments => this.departments$.next(departments)
    });
  }

  createProfile() {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      profileLink: ['', [Validators.required]]
    });
  }

  addProfile() {
    this.scientometricDbProfiles.push(this.createProfile());
  }

  removeProfile(index: number) {
    this.scientometricDbProfiles.removeAt(index);
  }

  registerTeacher() {
    this.userService.registerTeacher(this.newTeacherForm.value)
      .subscribe({
        next: createdUser => this.router.navigate(['/profile', createdUser.userId])
      });
  }
}
