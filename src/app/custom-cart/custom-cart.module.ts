import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartComponent } from './custom-cart.component';
import { ConfigModule, CmsConfig } from '@spartacus/core';



@NgModule({
  declarations: [CustomCartComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CustomCartComponent,
        }
      }
    } as CmsConfig),
  ],
  exports: [CustomCartComponent],
  entryComponents: [CustomCartComponent],
})
export class CustomCartModule { }
