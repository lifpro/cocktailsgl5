import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[ckColor]' })
export class ColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'green';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'red';
  }

  ngOnInit() {
    console.log(this.el);
    this.el.nativeElement.style.color = 'red';
  }
}
