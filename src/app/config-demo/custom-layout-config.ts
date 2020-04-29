import { LayoutConfig } from '@spartacus/storefront';

export const trainingLayoutConfig: LayoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
      header: {
        lg: {
          slots: [
            'SiteLogo',
            'SearchBox',
            'SiteLogin',
            'MiniCart',
            'NavigationBar',
            'SiteContext'
          ],
        },
        slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
      },
      footer: {
        slots: ['Footer'],
      },
      ProductDetailsPageTemplate: {
        lg: {
          pageFold: 'UpSelling',
        },
        pageFold: 'Summary',
        slots: [
          'Summary',
          'UpSelling',
          'CrossSelling',
          'SiteLinks',
          'PlaceholderContentSlot',
        ],
      },
      SearchResultsListPageTemplate: {
        lg: {
          slots: [
            'Section2',
            'ProductLeftRefinements',
            'SearchResultsListSlot',
          ],
        },
        slots: [
          'ProductLeftRefinements',
          'SearchResultsListSlot',
        ],
      },
    },
};
