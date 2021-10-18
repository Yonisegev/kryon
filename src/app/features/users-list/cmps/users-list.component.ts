import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
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

  ngOnInit(): void {
  }
}
