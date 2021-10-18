import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { fibonacci } from '../../fibonacci'

@Component({
  selector: 'user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPreviewComponent implements OnInit {

  constructor() { }

  @Input() user: User | undefined
  @Output() deleteUser = new EventEmitter<string>()
  ngOnInit(): void {
  }

  get userFiboAge() {
    if (this.user) {
      return fibonacci(this.user.age)
    } else return ''
  }

  onDeleteUser() {
    this.deleteUser.emit(this.user?.id) // Keep this component a presentational component
  }

}
