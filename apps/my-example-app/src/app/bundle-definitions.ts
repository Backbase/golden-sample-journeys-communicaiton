import { LazyConfig } from '@backbase/foundation-ang/core';
 
export const bundlesDefinitions: LazyConfig = [
  {
    module: 'SourceJourneyBundleModule',
    loadChildren: () => import('../bundles/source-journey-bundle.module').then(m => m.SourceJourneyBundleModule),
  },
  {
    module: 'DestinationJourneyBundleModule',
    loadChildren: () => import('../bundles/destination-journey-bundle.module').then(m => m.DestinationJourneyBundleModule),
  }
];