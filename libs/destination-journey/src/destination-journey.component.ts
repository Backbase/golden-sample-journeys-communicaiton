import { Component, Inject, InjectionToken, Input, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface DestinationJourneyComponentApi {
  setPayload: string;
}

export interface Communicator<API> {
  init(api: API): void;
}

export type CommunicationService = Communicator<{ api: DestinationJourneyComponentApi; route: ActivatedRoute }>;

export const DESTINATION_JOURNEY_COMMUNICATOR = new InjectionToken<CommunicationService>(
  'bb-destination-journey Communicator',
);

// we need to find easier way to extract an interface from our inputs and outputs

@Component({
  selector: 'bb-destination-journey',
  template: `
    Retrieved identifier: {{ identifier }}
    <button (click)="nothing()">nothing</button>
  `,
})
export class DestinationJourneyComponent implements DestinationJourneyComponentApi {
  identifier: string | undefined;
  type: string | undefined;

  @Input()
  public set setPayload(id: string) {
    this.identifier = id;
  }

  constructor(
    @Optional() @Inject(DESTINATION_JOURNEY_COMMUNICATOR) communicator: CommunicationService,
    route: ActivatedRoute,
  ) {
    if (communicator) {
      communicator.init({
        api: {
          set setPayload(id: string) {
            this.setPayload = id;
          },
        },
        route,
      });
    }
  }

  nothing() {
    console.log('nothing');
  }
}
