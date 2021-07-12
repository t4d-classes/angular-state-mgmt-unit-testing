// component stateful logic

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NewUser } from '../../models/users';
import { UserAccountsService } from '../../services/user-accounts.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  // component state data
  registerUserForm!: FormGroup;

  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(
    private fb: FormBuilder,
    private userAccountsSvc: UserAccountsService) { }

  ngOnInit(): void {
    // state
    this.registerUserForm = this.fb.group({
      username: '',
      firstName: '',
      lastName: '',
      title: '',
    });

  }

  // initiate changes to the stateful data
  // actions
  doRegisterUser() {
    this.userAccountsSvc.append(
      this.registerUserForm.value as NewUser);;
  }

}


// function RegisterUserComponent(props /* @Input */) {

//   const [registerUserForm, setRegisterUserForm] = useState({
//     username: '',
//     firstName: '',
//     lastName: '',
//     title: '',
//   })

//   return <form>
//   </form>;
// }

