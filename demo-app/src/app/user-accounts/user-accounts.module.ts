import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { UsersDisplayedCountComponent } from './components/users-displayed-count/users-displayed-count.component';


@NgModule({
  declarations: [
    RegisterUserComponent,
    RegisteredUsersComponent,
    UsersDisplayedCountComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterUserComponent,
    RegisteredUsersComponent,
    UsersDisplayedCountComponent,
  ],
})
export class UserAccountsModule { }
