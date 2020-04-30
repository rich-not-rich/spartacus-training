import { Injectable } from "@angular/core";
import { ProductAdapter, ConverterService, Product, ScopedProductData, PRODUCT_NORMALIZER } from '@spartacus/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root',
})
export class BestbuyProductAdapter implements ProductAdapter {

    constructor(protected http: HttpClient, protected converter: ConverterService) {}

    load(productCode: string, scope?: string): Observable<Product> {
        console.log('In our product adapter');
        return this.http.get(`https://api.bestbuy.com/v1/products/6202761.json?show=sku,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice,image,thumbnailImage,details,features.feature,onlineAvailability,description,longDescriptionHtml,categoryPath&apiKey=GIJ1DzoNuPuAoKjFJmqfJuDa`)
        .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    }

}
