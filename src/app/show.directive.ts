import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShow]',
})
export class ShowDirective {
  constructor(private el: ElementRef) {
    this.opacity('0.75');
    this.cursor('pointer');
    this.boxShadow('2px 1px 17px 9px #000000');
  }

  private opacity(pict: string) {
    this.el.nativeElement.style.opacity = pict;
  }

  private boxShadow(box: string) {
    this.el.nativeElement.style.boxShadow = box;
  }

  private cursor(point: string) {
    this.el.nativeElement.style.cursor = point;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity('1.0');
    this.cursor('pointer');
    this.boxShadow('2px 1px 17px 9px #000000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity('0.75');
    this.cursor('pointer');
    this.boxShadow('0px 0px 0px 0px #000000');
  }
}
