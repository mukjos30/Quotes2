import { Directive, ElementRef } from '@angular/core';
import { isNgContainer } from '@angular/compiler';

@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {

  constructor( private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor="brown";
  }

}
 

