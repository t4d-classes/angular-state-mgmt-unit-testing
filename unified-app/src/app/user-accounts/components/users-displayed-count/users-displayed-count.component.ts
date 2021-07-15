import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserAccountsService } from '../../services/user-accounts.service';

@Component({
  selector: 'app-users-displayed-count',
  templateUrl: './users-displayed-count.component.html',
  styleUrls: ['./users-displayed-count.component.css']
})
export class UsersDisplayedCountComponent implements OnInit {

  userCount$: Observable<number> = combineLatest([
    this.userAccountsSvc.all(),
    this.userAccountsSvc.showArchived$,
  ]).pipe(map(([users, showArchived]) => {
    if (showArchived) return users.length;
    return users.filter(u => !u.archived).length;
  }));

  constructor(private userAccountsSvc: UserAccountsService) { }

  ngOnInit(): void {
  }

}
