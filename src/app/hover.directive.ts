import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit{

  @Input() hinvHover: string = 'red';

  constructor(private element: ElementRef, private rederer: Renderer2) {
    console.log(this.element.nativeElement);
   }

  ngOnInit(): void {
    this.rederer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.hinvHover
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.rederer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rederer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }

}
