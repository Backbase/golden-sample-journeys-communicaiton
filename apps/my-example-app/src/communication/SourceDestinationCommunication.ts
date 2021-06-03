import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService, DestinationJourneyComponentApi } from '@backbase/destination-journey';
import { CommunicationService as SourceJourneyCommunicationService } from '@backbase/source-journey';

@Injectable()
export class SourceDestinationCommunication implements SourceJourneyCommunicationService, CommunicationService {
  constructor(private router: Router) {}

  init(data: { api: DestinationJourneyComponentApi; route: ActivatedRoute }): void {
    data.api.setPayload = data.route.snapshot.params.id;
  }

  event(): void {
    console.log('source journey event triggered');
  }
  eventWithPayload(id: string): void {
    this.router.navigate(['dest-journey', { id }]);
  }
}
