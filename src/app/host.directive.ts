import {Directive, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  @Input() name = 'root';

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
