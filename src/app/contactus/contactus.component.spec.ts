import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { ContactusComponent } from './contactus.component';
import { UserService } from '../shared/services/users.service';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj(['createUser']);
    mockRouter = jasmine.createSpyObj(['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [ContactusComponent],
      imports: [
        ReactiveFormsModule,
        CheckboxModule,
        ButtonModule,
        InputTextModule,
      ],
      providers: [
        FormBuilder,
        { provide: UserService, useValue: mockUserService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize userForm on ngOnInit', () => {
    component.ngOnInit();
    expect(component.userForm).toBeDefined();
    expect(component.userForm.get('firstName')?.value).toEqual('');
    expect(component.userForm.get('lastName')?.value).toEqual('');
    expect(component.userForm.get('email')?.value).toEqual('');
    expect(component.userForm.get('message')?.value).toEqual('');
    expect(component.userForm.get('terms')?.value).toEqual(false);
  });

  it('should create a user on submit', () => {
    mockUserService.createUser.and.returnValue(of());

    component.userForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      message: 'Hello',
      terms: true,
    });

    component.onSubmit();

    expect(mockUserService.createUser).toHaveBeenCalledWith({
      name: 'John Doe',
      username: 'john@example.com',
      image: jasmine.any(String),
      joinedDate: jasmine.any(String),
      lastActive: jasmine.any(String),
    });
  });

  it('should bind input fields to form controls', () => {
    fixture.detectChanges();

    const firstNameInput: HTMLInputElement =
      fixture.nativeElement.querySelector('#firstName');
    const lastNameInput: HTMLInputElement =
      fixture.nativeElement.querySelector('#lastName');

    firstNameInput.value = 'John';
    lastNameInput.value = 'Doe';

    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.dispatchEvent(new Event('input'));

    expect(component.userForm.get('firstName')?.value).toBe('John');
    expect(component.userForm.get('lastName')?.value).toBe('Doe');
  });
});
