import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User, NewUser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  // application state
  private users$ = new BehaviorSubject<User[]>([] /* initial state */);

  constructor() { }

  all() {
    return this.users$;
  }

  append(user: NewUser) {

    // let users = this.users$.value;

    // users.push({
    //   ...user,
    //   id: Math.max(...users.map(u => u.id), 0) + 1,
    // });

    let users = this.users$.value;

    // each time we received an action,
    // we produced a new state, and notified the selectors
    users = [
      ...users,
      {
        ...user,
        id: Math.max(...users.map(u => u.id), 0) + 1,
      }
    ];


    //  notified the selectors
    this.users$.next(users);
  }
}
