import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Output() modalButtonClicked = new EventEmitter<boolean>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onModalAction(state: boolean) {
    this.modalButtonClicked.emit(state)
  }

}
