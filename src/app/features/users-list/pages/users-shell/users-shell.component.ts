import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { getErrorMsg, getUsers } from '../../state';
import { UserPageActions } from '../../state/actions';

@Component({
  selector: 'users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {
  users$: Observable<User[]> | undefined;
  errorMessage$: Observable<string> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.users$ = this.store.select(getUsers)
    this.errorMessage$ = this.store.select(getErrorMsg)
    this.store.dispatch(UserPageActions.loadUsers({}))
  }

  onDeleteUser(userId: string) {
    this.store.dispatch(UserPageActions.deleteUser({ userId }))
  }

}
