import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule
  ]
})
export class ContactUsModule { }
