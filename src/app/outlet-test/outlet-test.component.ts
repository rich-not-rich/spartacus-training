import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Product } from '@spartacus/core';

@Component({
  selector: 'app-outlet-test',
  templateUrl: './outlet-test.component.html',
  styleUrls: ['./outlet-test.component.scss']
})
export class OutletTestComponent implements OnInit {

  product$: Observable<Product> = this.currentProductService.getProduct().pipe(
    filter(product => Boolean(product))
  );



  constructor(protected currentProductService: CurrentProductService) { }

  ngOnInit() {
  }

}
