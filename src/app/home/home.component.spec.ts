import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UserService } from '../shared/services/users.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

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
      imports: [TableModule, ButtonModule],
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
    expect(rows.length).toBe(2); // One header row, one data row

    const cells = rows[1].queryAll(By.css('td'));
    expect(cells.length).toBe(4); // Four cells in the data row

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
