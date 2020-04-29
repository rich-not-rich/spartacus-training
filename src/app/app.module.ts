import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core'; 
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { OutletTestModule } from './outlet-test/outlet-test.module';
import { CustomBannerModule } from './custom-banner/custom-banner.module';
import { CustomCartModule } from './custom-cart/custom-cart.module';
import { ConfigDemoModule } from './config-demo/config-demo.module';
import { ThemeConfig, Theme } from './config-demo/theme.config';
import { ConfigModule } from '@spartacus/core';
import { Level, DisplayConfig } from './config-demo/display.config';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { CustomSearchBoxComponentService } from './custom-search-box-component.service';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/rest/v2/'
        }
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.5',
        anonymousConsents: true
      }
    }),
    OutletTestModule,
    CustomBannerModule,
    CustomCartModule,
    ConfigDemoModule,
    ConfigModule.withConfig({
      theme: Theme.STRAWBERRIES,
    } as ThemeConfig),
    CustomRoutingModule,
  ],
  providers: [
      {
        provide: SearchBoxComponentService,
        useClass: CustomSearchBoxComponentService,
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
