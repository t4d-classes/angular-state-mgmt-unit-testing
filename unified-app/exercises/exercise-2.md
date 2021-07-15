# Exercise 2

Instructions: Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

## Steps

**Step 1.** In the User Accounts service, initialize the state with an array of 4 users.

**Step 2.** Place a button on each row of the registered users table. When the button is clicked, mark the user as archived.

- Copy the users array
- Using the id and the `findIndex` function, find the index of the user to replace in the new array
- Copy the original user, update the archive, and replace the user in the new users array with the index
- Output the new array

```javascript
newUsers = [...users];
userIndex = newUsers.findIndex(u => u.id === userId);
originalUser = newUsers[userIndex];
newUser = {
  ...originalUser,
  archived: !originalUser.archived,
}
newUsers[userIndex] = newUser
this.users$.next(newUsers)
```

**Step 3.** Add a button above the table that will show/hide the archived users. Non-archived users should always be shown.

**Step 4.** Add a component above the Register User component that shows how many users are displayed in the table.

App Component Template:
```html
<app-users-displayed></app-users-displayed>
<app-register-user></app-register-user>
<app-registered-users></app-registered-users>
```

**Step 5.** Ensure it all works, and please raise your hand when you are done.


