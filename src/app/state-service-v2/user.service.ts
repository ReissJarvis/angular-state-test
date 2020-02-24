import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, mapTo, tap } from 'rxjs/operators';

import { User } from '../shared/models/user.model';
import { RandomUserGenerator } from './random-user.generator';

interface UserFilter {
  name: string;
  email: string;
  isAdmin: boolean;
  sort: keyof User;
}

// fake service to fake api calls to the server
@Injectable()
export class UserService {

  _usersApiStub: User[] = [];

  constructor() { }

  get(opts?: UserFilter): Observable<User[]> {
    return of(this._usersApiStub)
      .pipe(
        delay(2000)
      );
  }

  add(u: User): Observable<User> {
    return of(undefined)
      .pipe(
        delay(2000),
        tap(() => this._usersApiStub.push(u)),
        mapTo(u)
      );
  }

  delete(u: User): Observable<User> {
    return of(undefined)
      .pipe(
        delay(2000),
        tap(() => this._usersApiStub = this._usersApiStub.filter(x => x.id !== u.id)),
        map(() => u)
      );
  }

  //method to just populate the fake user stub data
  _populateStubData(length: number) {
    this._usersApiStub = [];

    const times = x => f => {
      if (x > 0) {
        f();
        times (x - 1) (f);
      }
    };

    times(length)(() => this._usersApiStub.push(RandomUserGenerator.newUser()));
  }
}
