import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[modalOutsideClick]'
})
export class ModalOutsideClickDirective {
  @Input() isModalOpen: boolean | undefined
  @Output() onOutsideClick = new EventEmitter()
  constructor() { }
  wasInside = true;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOutside() {
    if (this.isModalOpen && !this.wasInside) {
      this.onOutsideClick.emit()
    }
    this.wasInside = false;
  }


}
