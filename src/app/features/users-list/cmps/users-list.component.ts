import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  constructor() {}

  @Input() users: User[] | undefined;
  @Output() deleteUser = new EventEmitter<string>()
  ngOnInit(): void {
  }

  onDeleteUser(userId: string) {
    this.deleteUser.emit(userId) // Keep this component a presentational component
  }
}
