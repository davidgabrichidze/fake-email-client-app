import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SchemeSwitcherComponent } from './scheme-switcher.component';

@NgModule({
  declarations: [SchemeSwitcherComponent],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, CommonModule],
  exports: [SchemeSwitcherComponent],
})
export class FuseOptioSchemeSwitcherModule {}
