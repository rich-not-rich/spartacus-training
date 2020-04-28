import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletTestComponent } from './outlet-test.component';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [OutletTestComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [OutletTestComponent]
})
export class OutletTestModule { }
