import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestbuyProductAdapter } from './bestbuy-product.adpater';
import { BestbuyProductNormalizer } from './best-buy-product-normalizer';
import { ProductAdapter, PRODUCT_NORMALIZER, ConfigModule, OccConfig, ProductScope } from '@spartacus/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      occ: {
        backend: {
          loadingScopes: {
            product: {
              details: {
                include: [ProductScope.LIST],
              },
            },
          }
        }
      }
    } as OccConfig),
  ],
  providers: [
    {
      provide: ProductAdapter,
      useExisting: BestbuyProductAdapter,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: BestbuyProductNormalizer,
      multi: true,
    }
  ],
})
export class DataBindingModule { }
