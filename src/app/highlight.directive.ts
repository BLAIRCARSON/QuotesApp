import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}

  @HostListener ("click") onClicks(){
    this.backGround("green")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.backGround("None")
  }

  private backGround(action:string)

  {
    this.elem.nativeElement.style.backgroundColor=action;
   }

}
