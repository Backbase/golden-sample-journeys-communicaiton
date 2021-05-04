import { Router } from '@angular/router';

export interface DestinationJourneyInput {
  id: string;
  type: string;
}

export class DestinationJourneyCommunicationService {
  constructor(private readonly journeyUrl: string, private readonly router: Router) {}

  navigate(data: DestinationJourneyInput) {
    this.router.navigate([this.journeyUrl], {
      state: {
        identifier: data.id,
        type: data.type,
      },
    });
  }
}
