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
  @Input() currentUserId: string | undefined | null
  @Input() searchValue: string | undefined | null
  @Output() deleteUser = new EventEmitter<string>()
  @Output() infoToggled = new EventEmitter()
  ngOnInit(): void {
  }

  onDeleteUser(userId: string) {
    this.deleteUser.emit(userId) // Keep this component a presentational component
  }

  onInfoToggle(userId: string) {
    this.infoToggled.emit(userId)
  }
}
