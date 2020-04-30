import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMetaResolver, ContentPageMetaResolver, ProductPageMetaResolver } from '@spartacus/core';
import { ContentPageDescriptionResolver } from './content-page-description-resolver';
import { SeoMetaService } from '@spartacus/storefront';
import { CustomSeoMetaService } from './custom-seo-meta.service';
import { CustomProductPageMetaResolver } from './custom-product-page-resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PageMetaResolver,
      useExisting: ContentPageDescriptionResolver,
      multi: true,
    },
    {
      provide: SeoMetaService,
      useClass: CustomSeoMetaService
    },
    {
      provide: ProductPageMetaResolver,
      useClass: CustomProductPageMetaResolver,
    },
  ]
})
export class SeoMetaModule { }
