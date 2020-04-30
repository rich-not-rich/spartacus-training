import { PageDescriptionResolver, ContentPageMetaResolver, PageMeta, CmsService, TranslationService, PageTitleResolver, PageType, Page } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { translations } from '@spartacus/assets';

@Injectable({
    providedIn: 'root',
  })
export class ContentPageDescriptionResolver extends ContentPageMetaResolver implements PageDescriptionResolver, PageTitleResolver {

    constructor(cms: CmsService, translation: TranslationService) {
        console.log('In my resolver');
        super(cms, translation);
        this.pageType = PageType.CONTENT_PAGE;
    }

    resolveDescription(): Observable<string> {
        console.log('resolve description');
        return of('content page');
    }

    getScore(page: Page): number {
        let score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 2 : -2;
            }
        return score;
    }
}
