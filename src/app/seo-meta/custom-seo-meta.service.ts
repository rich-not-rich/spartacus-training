import { SeoMetaService } from '@spartacus/storefront';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class CustomSeoMetaService extends SeoMetaService {

    protected set image(imageUrl: string) {
      console.log('in here');
        if (imageUrl) {
          this.addTag({ name: 'og:image', content: imageUrl });
          this.addTag({ name: 'twitter:image', content: imageUrl });
        }
      }
}