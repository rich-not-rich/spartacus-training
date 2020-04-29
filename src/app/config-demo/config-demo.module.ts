import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDemoComponent } from './config-demo.component';
import { ConfigModule } from '@spartacus/core';
import { defaultDisplayConfig } from './default-display-config';
import { DisplayConfig, Level } from './display.config';
import { trainingLayoutConfig } from './custom-layout-config';
import { CustomPageLayoutHandler } from './custom-page-layout-handler';
import { PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';
import { MiniCartPageLayoutHandler } from './mini-cart-layout-handler';



@NgModule({
  declarations: [ConfigDemoComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultDisplayConfig),
    ConfigModule.withConfig({
      displayLevel: Level.CONSOLE,
    } as DisplayConfig),
    ConfigModule.withConfig(trainingLayoutConfig),
  ],
  exports: [ConfigDemoComponent],
  providers: [
      {
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: MiniCartPageLayoutHandler,
        multi: true,
      }
  ]
})
export class ConfigDemoModule { }
