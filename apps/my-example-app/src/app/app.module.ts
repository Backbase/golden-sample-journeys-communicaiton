import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DESTINATION_JOURNEY_COMMUNICATOR } from '@backbase/destination-journey';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { CommunicationService } from '@backbase/source-journey';
import { DeckContainerModule, PanelContainerModule } from '@backbase/universal-ang';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { bundlesDefinitions } from './bundle-definitions';
import { SourceDestinationCommunication } from '../communication/SourceDestinationCommunication';

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
    SourceDestinationCommunication,
    {
      provide: CommunicationService,
      useExisting: SourceDestinationCommunication,
    },
    {
      provide: DESTINATION_JOURNEY_COMMUNICATOR,
      useExisting: SourceDestinationCommunication,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
