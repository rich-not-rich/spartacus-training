import { Component, OnInit } from '@angular/core';
import { CmsComponentData, BannerComponent } from '@spartacus/storefront';
import { CmsBannerComponent } from '@spartacus/core';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss']
})
export class CustomBannerComponent {

  data$ = this.component.data$;

  constructor(private component: CmsComponentData<CmsBannerComponent>) { 
  }

  ngOnInit() {
  }

}
