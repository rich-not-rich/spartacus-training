import { Component, OnInit, Inject } from '@angular/core';
import { Config } from '@spartacus/core';

@Component({
  selector: 'app-config-demo',
  templateUrl: './config-demo.component.html',
  styleUrls: ['./config-demo.component.scss']
})
export class ConfigDemoComponent implements OnInit {

  constructor(@Inject(Config) protected config: any) { }

  ngOnInit() {
    if (this.config.displayLevel === 'Console') {
      console.log(this.config);
    }
  }

}
