import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  @Output() modalButtonClicked = new EventEmitter<boolean>()

  onModalAction(state: boolean) {
    this.modalButtonClicked.emit(state)
  }

}
