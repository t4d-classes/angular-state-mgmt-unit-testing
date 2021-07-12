import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User, NewUser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  private _users$ = new BehaviorSubject<User[]>([
    { id: 1, username: 'bsmith', firstName: 'Bob', lastName: 'Smith', title: 'CEO', archived: false },
    { id: 2, username: 'jsmith', firstName: 'Jennie', lastName: 'Smith', title: 'CFO', archived: false },
    { id: 3, username: 'tthompkins', firstName: 'Tina', lastName: 'Thompkins', title: 'CIO', archived: false },
    { id: 4, username: 'dhellar', firstName: 'Debbie', lastName: 'Hellar', title: 'CTO', archived: false },
  ]);

  private _showArchived$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  get showArchived$() {
      return this._showArchived$;
  }

  all() {
    return this._users$;
  }

  toggleShowArchived() {
    this._showArchived$.next(!this._showArchived$.value);
  }

  append(user: NewUser) {

    let users = this._users$.value;

    users = [
      ...users,
      {
        ...user,
        id: Math.max(...users.map(u => u.id), 0) + 1,
        archived: false,
      }
    ];

    this._users$.next(users);
  }

  archive(userId: number) {
    let newUsers = [...this._users$.value];
    let userIndex = newUsers.findIndex(u => u.id === userId);
    let originalUser = newUsers[userIndex];
    let newUser = {
      ...originalUser,
      archived: !originalUser.archived,
    }
    newUsers[userIndex] = newUser
    this._users$.next(newUsers)      
  }
}
