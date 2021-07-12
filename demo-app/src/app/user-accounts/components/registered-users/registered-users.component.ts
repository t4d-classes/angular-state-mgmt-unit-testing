import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models/users';
import { UserAccountsService } from '../../services/user-accounts.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  // selectors
  // selector select data off the state,
  // and they run when the data change
  users$: Observable<User[]> = this.userAccountsSvc.all();

  constructor(private userAccountsSvc: UserAccountsService) { }

  ngOnInit(): void {
    // this.userAccountsSvc.all().subscribe(users => {
    //   this.users = users;
    // });
  }

}
