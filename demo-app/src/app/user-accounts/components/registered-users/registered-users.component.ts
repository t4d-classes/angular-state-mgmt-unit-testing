import { Component, OnInit } from '@angular/core';

import { User } from '../../models/users';
import { UserAccountsService } from '../../services/user-accounts.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  users: User[]  = [];

  constructor(private userAccountsSvc: UserAccountsService) { }

  ngOnInit(): void {
    this.users = this.userAccountsSvc.all();
  }

}
