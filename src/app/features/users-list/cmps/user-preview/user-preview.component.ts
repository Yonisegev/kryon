import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { fibonacci } from '../../fibonacci'

@Component({
  selector: 'user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPreviewComponent {

  @Input() user: User | undefined
  @Input() currentUserId: string | undefined | null
  @Input() searchValue: string | undefined | null
  @Output() deleteUser = new EventEmitter<string>()
  @Output() infoToggled = new EventEmitter<string>()

  get userFiboAge() {
    if (this.user) {
      return fibonacci(this.user.age)
    } else return ''
  }

  onDeleteUser() {
    this.deleteUser.emit(this.user?.id) // Keep this component a presentational component
  }

  onToggleInfo() {
    this.infoToggled.emit(this.user?.id)
  }

}
