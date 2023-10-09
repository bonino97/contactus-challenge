import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../shared/interfaces/IUser.interface';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      message: [''],
      terms: [false],
    });
  }

  createUser(user: IUser): void {
    this._userService.createUser(user).subscribe();
  }

  onSubmit(): void {
    const user = {
      name: `${this.userForm.get('firstName')?.value} ${
        this.userForm.get('lastName')?.value
      }`,
      username: this.userForm.get('email')?.value,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png',
    };
    this.createUser(user);
    this.userForm.reset();
  }
}
