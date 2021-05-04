import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface DestinationJourneyInput {
  id: string;
  type: string;
}

@Injectable()
export class DestinationJourneyCommunicationService {
  constructor(private readonly url: string, private readonly router: Router) {}

  navigate(data: DestinationJourneyInput) {
    this.router.navigate([this.url], {
      state: {
        identifier: data.id,
        type: data.type,
      },
    });
  }
}
