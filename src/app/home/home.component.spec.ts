import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { UserService } from '../shared/services/users.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  beforeEach(async () => {
    const userServiceMock = {
      users$: of([
        {
          name: 'John',
          username: 'john_doe',
          image: null,
          joinedDate: new Date(),
          lastActive: 'Yesterday',
        },
      ]),
    };

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [TableModule, ButtonModule, RouterTestingModule],
      providers: [{ provide: UserService, useValue: userServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render headers', () => {
    const headersEl = fixture.debugElement.query(
      By.css('.font-bold')
    ).nativeElement;
    expect(headersEl.textContent).toContain('Members & Roles');
  });

  it('should render users table', () => {
    const rows = fixture.debugElement.queryAll(By.css('p-table tr'));
    expect(rows.length).toBe(2);

    const cells = rows[1].queryAll(By.css('td'));
    expect(cells.length).toBe(4);

    expect(cells[0].nativeElement.textContent).toContain('John');
    expect(cells[0].nativeElement.textContent).toContain('@john_doe');
  });

  it('should display default image when user image is null', () => {
    const image = fixture.debugElement.query(
      By.css('.profile-image')
    ).nativeElement;
    expect(image.src).toContain(
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png'
    );
  });
});
