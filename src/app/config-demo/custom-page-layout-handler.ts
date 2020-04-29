import { PageLayoutHandler, BREAKPOINT } from '@spartacus/storefront';
import { LanguageService } from '@spartacus/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
export class CustomPageLayoutHandler implements PageLayoutHandler {

    constructor(protected languageService: LanguageService) {}

    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string) {
        console.log('this is my layout code');
        console.log(this.languageService.getActive());
        return slots$;
    }
}
