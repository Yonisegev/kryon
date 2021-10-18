import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {
  users$: Observable<User[]> | undefined;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.users$ = this.userService.getUsers()
  }

}
