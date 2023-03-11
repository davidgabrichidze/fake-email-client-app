import { NgModule } from '@angular/core';
import { PrototypeUiDirective } from './prototype-ui.directive';

@NgModule({
  declarations: [PrototypeUiDirective],
  exports: [PrototypeUiDirective],
})
export class PrototypeUiModule {}
