import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, RoutingConfig, OccConfig, PRODUCT_NORMALIZER } from '@spartacus/core';
import { ProductPrettyNameNormalizer } from './product-name-normalizer';



@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:productCode/:name',
              'training-product/:productCode/:name',
              'product/:productCode/:name'
            ],
          },
          category: {
            paths: [
              'training-category/:categoryCode',
              'category/:categoryCode'
            ]
          }
        }
      }
    } as RoutingConfig),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            productSearch: 
                          // tslint:disable-next-line: max-line-length
                          'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          },
        },
      },
    } as OccConfig),
  ],
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductPrettyNameNormalizer,
      multi: true,
    }
  ]
})
export class ProductRoutesModule { }
