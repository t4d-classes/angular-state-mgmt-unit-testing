import { Injectable } from '@angular/core';

import { User, NewUser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  private users: User[] = [];

  constructor() { }

  all() {
    return this.users;
  }

  append(user: NewUser) {
    this.users.push({
      ...user,
      id: Math.max(...this.users.map(u => u.id), 0) + 1,
    });
  }
}
