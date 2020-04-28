import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDemoComponent } from './config-demo.component';
import { ConfigModule } from '@spartacus/core';
import { defaultDisplayConfig } from './default-display-config';
import { DisplayConfig, Level } from './display.config';



@NgModule({
  declarations: [ConfigDemoComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultDisplayConfig),
    ConfigModule.withConfig({
      displayLevel: Level.CONSOLE,
    } as DisplayConfig)
  ],
  exports: [ConfigDemoComponent]
})
export class ConfigDemoModule { }
