import {
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[prototypeUi]',
})
export class PrototypeUiDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    if (!environment.production) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
