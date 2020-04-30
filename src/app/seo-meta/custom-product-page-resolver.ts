import { Injectable } from "@angular/core";
import { ProductPageMetaResolver, RoutingService, ProductService, TranslationService, Product, ProductScope, PageType } from '@spartacus/core';
import { Observable } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CustomProductPageMetaResolver extends ProductPageMetaResolver {
    constructor(
        protected routingService: RoutingService,
        protected productService: ProductService,
        protected translation: TranslationService
      ) {
        super(routingService, productService, translation);
        console.log('CustomProductPageMetaResolver');
        this.pageType = PageType.PRODUCT_PAGE;
      }

      private product$ = this.routingService.getRouterState().pipe(
        map(state => state.state.params['productCode']),
        filter(code => !!code),
        switchMap(code => this.productService.get(code, ProductScope.DETAILS)),
        filter(Boolean)
      );

  resolveDescription(): Observable<string> {
      console.log('trimming the description');
      return this.product$.pipe(
      switchMap((p: Product) =>
        this.translation.translate('pageMetaResolver.product.description', {
          description: p.summary.substring(0, 160),
        })
      )
    );
  }
}