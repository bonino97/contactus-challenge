import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { UserService } from '../shared/services/users.service';
import { IUser } from '../shared/interfaces/IUser.interface';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  userForm!: FormGroup;

  _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  initForm() {
    this.userForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      message: [''],
      terms: [false],
    });
  }

  createUser(user: IUser): void {
    this._userService
      .createUser(user)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => this._router.navigateByUrl('/users'));
  }

  onSubmit(): void {
    if (!this.userForm.valid) return;

    const user = {
      name: `${this.userForm.get('firstName')?.value} ${
        this.userForm.get('lastName')?.value
      }`,
      username: this.userForm.get('email')?.value,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png',
      joinedDate: new Date().toISOString(),
      lastActive: '1 minute ago',
    };

    this.createUser(user);
  }
}
