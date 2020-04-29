import { Converter, Occ, Product } from '@spartacus/core';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class ProductPrettyNameNormalizer implements Converter<Occ.Product, Product> {
    convert(source: Occ.Product, target?: Product): Product {
        target.name = source.name.replace(/ /g, '-');
        return target;
    }
}
