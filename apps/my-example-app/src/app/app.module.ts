import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bundlesDefinitions } from './bundle-definitions';
import { DeckContainerModule, PanelContainerModule } from '@backbase/universal-ang';
import { JourneyDataProvider } from '../bundles/destination-journey-data-provider';
import { sourceJourneyDataToken } from '@backbase/source-journey';
import { destinationJourneyDataToken } from '@backbase/destination-journey';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      lazyModules: bundlesDefinitions,
    }),
    DeckContainerModule,
    PanelContainerModule,
    RouterModule.forRoot([], { initialNavigation: 'disabled', useHash: true }),
  ],
  providers: [
    ...(environment.mockProviders || []),
    JourneyDataProvider,
    {
      provide: sourceJourneyDataToken,
      useExisting: JourneyDataProvider,
    },
    {
      provide: destinationJourneyDataToken,
      useExisting: JourneyDataProvider,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
