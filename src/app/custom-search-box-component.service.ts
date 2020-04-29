import { Injectable } from '@angular/core';
import { SearchBoxComponentService, SearchBoxConfig } from '@spartacus/storefront';
import { SearchboxService, RoutingService, TranslationService, WindowRef } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class CustomSearchBoxComponentService extends SearchBoxComponentService {

  constructor(
    public searchService: SearchboxService,
    protected routingService: RoutingService,
    protected translationService: TranslationService,
    protected winRef: WindowRef
  ) {
    super(searchService, routingService, translationService, winRef);
  }

  search(query: string, config: SearchBoxConfig): void {
    if (!query || query === '') {
      this.clearResults();
      return;
    }

    if (
      config.minCharactersBeforeRequest &&
      query.length < config.minCharactersBeforeRequest
    ) {
      return;
    }

    if (config.displayProducts) {
      this.searchService.search(query, {
        pageSize: config.maxProducts,
        sortCode: 'name-asc',
      });
    }

    if (config.displaySuggestions) {
      this.searchService.searchSuggestions(query, {
        pageSize: config.maxSuggestions,
      });
    }
  }
}
