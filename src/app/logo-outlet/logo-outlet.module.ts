import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoOutletComponent } from './logo-outlet.component';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [LogoOutletComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [LogoOutletComponent],
})
export class LogoOutletModule { }
