import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunicationService, DestinationJourneyComponentApi } from '@backbase/destination-journey';
import { CommunicationService as SourceJourneyCommunicationService } from '@backbase/source-journey';

@Injectable()
export class SourceDestinationCommunication implements SourceJourneyCommunicationService, CommunicationService {
  id:string | undefined;
  constructor(private router: Router) {}

  init(api: DestinationJourneyComponentApi): void {
    api.setPayload(this.id!);
  }

  event(): void {
    console.log('source journey event triggered');
  }

  eventWithPayload(id: string): void {
    this.router.navigate(['dest-journey']);
    this.id = id;
  }
}
