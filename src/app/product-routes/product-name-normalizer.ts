import { Converter, Occ, Product } from '@spartacus/core';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})
export class ProductPrettyNameNormalizer implements Converter<Occ.Product, Product> {
    convert(source: Occ.Product, target?: any): any {
        target.prettyName = source.name.replace(/ /g, '-');
        if (target.prettyName.length > 10) {
            target.prettyName = target.prettyName.substring(0, 10);
        }
        return target;
    }
}

@Injectable()
export class MyProductCategoriesNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target?: any): any {
      target.category = 'no-category';
      target.secondCategory = 'no-second-category';
    if (source.categories && source.categories.length) {
      target.category = source.categories[0].name; //
      if (source.categories.length > 1) {
          target.secondCategory = source.categories[1].name;
      }
    }
    return target;
  }
}
