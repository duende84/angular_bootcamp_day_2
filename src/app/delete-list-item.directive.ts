import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDeleteListItem]'
})
export class DeleteListItemDirective {

  @HostListener('click') onClick() {
    this.deleteItem();
  }

  constructor(private elementRef: ElementRef) { }
  
  private deleteItem() {
    //this.elementRef.nativeElement.style.display = 'none';
    this.elementRef.nativeElement.remove();
  }
}
