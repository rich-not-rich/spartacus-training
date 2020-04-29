import { Component, OnInit } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  cart$ = this.activeCartService.getActive();

  constructor(protected activeCartService: ActiveCartService) { }

  ngOnInit() {
  }

}
