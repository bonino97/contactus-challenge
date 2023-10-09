import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  of,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { IUser } from '../interfaces/IUser.interface';
import { IResponse } from '../interfaces/IResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'assets/mocks/users.json';
  private usersSubject = new BehaviorSubject<IUser[]>([]);

  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getUsers()
      .pipe(
        tap(({ data }) => {
          this.usersSubject.next(data);
          return of(data);
        }),
        catchError(() => {
          this.usersSubject.next([]);
          return of(null);
        }),
        shareReplay()
      )
      .subscribe();
  }

  getUsers(): Observable<IResponse<IUser[]>> {
    return this.http.get<IResponse<IUser[]>>(this.apiUrl);
  }

  createUser(user: IUser): Observable<IUser> {
    return of(user).pipe(
      tap((response) => {
        const users = this.usersSubject.getValue();
        users.push(response);
        this.usersSubject.next(users);
      })
    );
  }
}
