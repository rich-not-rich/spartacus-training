import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCartComponent } from './custom-cart.component';
import { ConfigModule, CmsConfig, I18nModule } from '@spartacus/core';



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
    I18nModule
  ],
  exports: [CustomCartComponent],
  entryComponents: [CustomCartComponent],
})
export class CustomCartModule { }
