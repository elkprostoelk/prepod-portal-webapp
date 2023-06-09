import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserAvatarAndNameDto} from "../../dtos/UserAvatarAndNameDto";
import {environment} from "../../environments/environment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {isNullOrUndefined} from "../../helping-methods";

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.css']
})
export class UserProfileInfoComponent {
  activeStateClasses: string[] = ['active', '', '', ''];
  serverPath: string = environment.serverPath;
  userId: string = '';
  nameAndAvatar: UserAvatarAndNameDto | undefined;
  changeAvatarForm: FormGroup;
  constructor(private readonly userService: UserService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,
              private readonly formBuilder: FormBuilder) {
    this.changeAvatarForm = formBuilder.group({
      avatarImageFile: new FormControl('', Validators.required),
      userId: ['', Validators.required],
      fileSource: new FormControl('', [Validators.required])
    });
    activatedRoute.paramMap.subscribe({
      next: paramMap => {
        if (paramMap.has('userId')) {
          this.userId = paramMap.get('userId')!;
          this.getUserAvatarAndName();
        }
        else if (this.isAuthenticated) {
          this.userId = userService.parseJwt()!.id;
          this.getUserAvatarAndName();
        }
        else {
          console.log('No user ID provided!');
          router.navigateByUrl('/login');
        }
        this.changeAvatarForm.get('userId')!.setValue(this.userId);
      }
    });
  }

  get isAuthenticated(): boolean {
    return this.userService.isAuthenticated;
  }

  get isAdmin(): boolean {
    return this.userService.isAdmin;
  }

  get isProfilesCreator(): boolean {
    return this.userService.isProfilesCreator;
  }

  get isMyPage(): boolean {
    return this.userId === this.loggedUserId;
  }

  get loggedUserId(): string | undefined {
    return this.userService.loggedUserSubject.getValue()?.id ?? undefined;
  }

  logout(): void {
    this.userService.logoutUser();
    this.router.navigateByUrl('/login');
  }

  changeActiveState(tabNumber: number): void {
    this.activeStateClasses.forEach((cssClass, i, arr) => {
      arr[i] = (i === tabNumber ? 'active' : '');
    });
  }

  private getUserAvatarAndName(): void {
    this.userService.getUserAvatarAndName(this.userId).subscribe({
      next: (dto: UserAvatarAndNameDto) => {
        this.nameAndAvatar = dto;
        this.router.navigate(['/profile', this.userId, 'main-info']);
      }
    });
  }

  onChangeAvatar(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.changeAvatarForm.patchValue({
        fileSource: file
      });
      this.onSubmitChangeAvatar();
    }
  }

  onSubmitChangeAvatar(): void {
    let data: FormData = new FormData();
    data.append('avatarImageFile', this.changeAvatarForm.get('fileSource')?.value);
    data.append('userId', this.changeAvatarForm.get('userId')?.value);
    this.userService.changeUserAvatar(data)
      .subscribe({
        error: (err) => {
          console.log(err);
        }
      })
  }

  showAvatarItems(): void {
    if (this.isAdmin || this.isMyPage) {
      let deleteAvatar = document.getElementById('deleteAvatar');
      if (deleteAvatar) {
        deleteAvatar.style.display = 'block';
      }
      let uploadAvatar = document.getElementById('uploadAvatar')!;
      uploadAvatar.style.opacity = '1';
      uploadAvatar.style.height = '32px';
    }
  }

  hideAvatarItems(): void {
    if (this.isAdmin || this.isMyPage) {
      let deleteAvatar = document.getElementById('deleteAvatar');
      if (deleteAvatar) {
        deleteAvatar.style.display = 'none';
      }
      let uploadAvatar = document.getElementById('uploadAvatar')!;
      uploadAvatar.style.opacity = '0';
      uploadAvatar.style.height = '0';
    }
  }

  uploadAvatar() {
    let fileInput = document.getElementById('avatarImageFile') as HTMLInputElement;
    fileInput.click();
  }

  deleteAvatar() {
    let confirmDeleting = confirm("Ви впевнені, що хочете видалити це фото?");
    if (confirmDeleting) {
      this.userService.deleteUserAvatar(this.userId)
        .subscribe({
          error: (err) => {
            console.log(err);
          }
        })
    }
    else {
      return;
    }
  }

  get isImageDefault(): boolean {
    return !isNullOrUndefined(this.nameAndAvatar)
            && this.nameAndAvatar!.avatarImagePath.includes('no-avatar.png');
  }
}
