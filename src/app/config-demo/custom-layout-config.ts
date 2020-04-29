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
          ],
        },
        slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
      },
      footer: {
        slots: ['SiteContext',
        'SiteLinks', 'Footer'],
      },
    },
};
