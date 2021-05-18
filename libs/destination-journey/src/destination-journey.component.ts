import { ChangeDetectorRef, Component, Inject, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';

export interface DestinationJourneyNavigationState {
  identifier: string;
  type: string;
}

type TalkClient = Observable<DestinationJourneyNavigationState | null>;

export const destinationJourneyDataToken = new InjectionToken<Observable<DestinationJourneyNavigationState | null>>(
  'bb-destination-journey Data',
);

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

  constructor(
    @Optional() @Inject(destinationJourneyDataToken) dataProvider: TalkClient,
    private cd: ChangeDetectorRef,
  ) {
    if (!dataProvider) {
      throw new Error();
    }
    dataProvider.subscribe((data) => {
      if(data){
        console.log(data);
        this.identifier = data.identifier;
        this.type = data.type;
      }else {
        console.log('looks like you landed on this page with out passing the required data did you refresh the page!')
      }

      // cd.markForCheck()
    });
    // console.log(this.route.data, window.history.state);
    // this.route.params.subscribe(console.log);
    // this.route.queryParams.subscribe(console.log);
    // this.route.data.subscribe(console.log);
    // this.route.data.subscribe((data) => {
    //   this.identifier = data.identifier;
    //   this.type = data.type;
    // });
    // //const state = this.router.getCurrentNavigation()?.extras.state;
    // const state = window.history.state as DestinationJourneyNavigationState | undefined;
  }
}
