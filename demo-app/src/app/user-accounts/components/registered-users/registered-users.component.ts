import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../models/users';
import { UserAccountsService } from '../../services/user-accounts.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  users$: Observable<User[]> = combineLatest([
    this.userAccountsSvc.all(),
    this.userAccountsSvc.showArchived$,
  ]).pipe(map( ([users, showArchived]) => {
    if (showArchived) return users;
    return users.filter(u => !u.archived);
  }));

  constructor(private userAccountsSvc: UserAccountsService) { }

  ngOnInit(): void {
  }

  toggleShowArchived() {
    this.userAccountsSvc.toggleShowArchived();
  }

  archiveUser(userId: number) {
    this.userAccountsSvc.archive(userId);
  }
}
