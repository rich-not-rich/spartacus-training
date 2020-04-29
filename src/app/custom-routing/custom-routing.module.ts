import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { ProductRoutesModule } from '../product-routes/product-routes.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactUsModule,
    RouterModule.forChild([
      { path: 'contact', canActivate: [CmsPageGuard], component: ContactUsComponent, },
      { path: 'demo', canActivate: [CmsPageGuard], component: PageLayoutComponent, data: { pageLabel: '/faq' }},
    ]),
    ProductRoutesModule
  ]
})
export class CustomRoutingModule { }
