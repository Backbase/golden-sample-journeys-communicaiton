import { ChangeDetectorRef, Component, Inject, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';

export interface DestinationJourneyNavigationState {
  identifier: string;
  type: string;
}

type TalkClient = Observable<DestinationJourneyNavigationState | null>;

export const DESTINATION_JOURNEY_DATA = new InjectionToken<TalkClient>('bb-destination-journey Data');

@Component({
  selector: 'bb-destination-journey',
  template: `
    Retrieved identifier: {{ identifier }} <br />
    Retrieved type: {{ type }}
  `,
})
export class DestinationJourneyComponent {
  identifier: string | undefined;
  type: string | undefined;

  constructor(@Optional() @Inject(DESTINATION_JOURNEY_DATA) dataProvider: TalkClient) {
    if (!dataProvider) {
      throw new Error();
    }
    dataProvider.subscribe((data) => {
      if (data) {
        console.log(data);
        this.identifier = data.identifier;
        this.type = data.type;
      } else {
        console.log('looks like you landed on this page with out passing the required data did you refresh the page!');
      }
    });
  }
}
