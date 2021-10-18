import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverColor]'
})
export class HoverColorDirective {
  @Input() userColor: string | undefined
  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseover')
  onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = this.userColor
  }
  @HostListener('mouseout')
  onMouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = 'unset'
  }
}
