import { Component, Inject, InjectionToken, Input, Optional } from '@angular/core';
export interface DestinationJourneyComponentApi {
  setPayload(id: string): void;
}

export interface Communicator<API> {
  init(api: API): void;
}

export type CommunicationService = Communicator<DestinationJourneyComponentApi>;

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
export class DestinationJourneyComponent {
  identifier: string | undefined;
  type: string | undefined;

  @Input()
  public set payload(id: string) {
    this.identifier = id;
  }

  constructor(@Optional() @Inject(DESTINATION_JOURNEY_COMMUNICATOR) communicator: CommunicationService) {
    if (communicator) {
      communicator.init({
        setPayload: (id) => {
          this.payload = id;
        },
      });
    }
  }

  nothing() {
    console.log('nothing');
  }
}
