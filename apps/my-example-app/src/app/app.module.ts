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
import { DeckContainerModule } from '@backbase/universal-ang';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      lazyModules: bundlesDefinitions,
    }),
    DeckContainerModule,
    RouterModule.forRoot([], { initialNavigation: "disabled", useHash: true })
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
