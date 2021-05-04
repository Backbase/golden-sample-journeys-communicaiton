import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationJourneyCommunicationService } from '@backbase/destination-journey';
import { SourceJourneyModule, ISourceJourneyCommunicationService } from '@backbase/source-journey';

export class NavigationService implements ISourceJourneyCommunicationService {
  readonly destinationNavigationService: DestinationJourneyCommunicationService;

  constructor(readonly router: Router) {
    this.destinationNavigationService = new DestinationJourneyCommunicationService('dest-journey', router);
  }

  navigate(id: string) {
    this.destinationNavigationService.navigate({
      id,
      type: 'Type1',
    });
  }
}
@NgModule({
  declarations: [],
  imports: [SourceJourneyModule],
  providers: [
    {
      provide: ISourceJourneyCommunicationService,
      useClass: NavigationService,
    },
  ],
})
export class SourceJourneyBundleModule {}
