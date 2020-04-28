import { Component, OnInit } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';

@Component({
  selector: 'app-custom-cart',
  templateUrl: './custom-cart.component.html',
  styleUrls: ['./custom-cart.component.scss']
})
export class CustomCartComponent implements OnInit {

  cart$ = this.activeCartService.getActive();

  constructor(protected activeCartService: ActiveCartService) { }

  ngOnInit() {
  }

}
