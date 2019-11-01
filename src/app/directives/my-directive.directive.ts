import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyDirectiveDirective {

  constructor(
    public el: ElementRef,
    public renderer: Renderer,
  ) { }

  @Input() color:string
  @Input() underline:boolean

  ngOnInit(){
    this.el.nativeElement.style.color = this.color
    this.el.nativeElement.style.textDecoration = this.underline ? "underline" : ""

    // this.renderer.setElementStyle(this.el.nativeElement, 'color', this.color)
    // this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', this.underline ? "underline" : "")
  }

}
