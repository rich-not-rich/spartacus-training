import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDemoComponent } from './config-demo.component';
import { ConfigModule } from '@spartacus/core';
import { defaultThemeConfig } from './default-theme-config';



@NgModule({
  declarations: [ConfigDemoComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultThemeConfig),
  ],
  exports: [ConfigDemoComponent]
})
export class ConfigDemoModule { }
