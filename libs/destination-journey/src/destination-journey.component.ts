import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface DestinationJourneyNavigationState {
  identifier: string;
  type: string;
}

@Component({
  selector: 'bb-destination-journey',
  template: `
    Retrieved identifier: {{ identifier }} <br />
    Retrieved type: {{ type }}
  `,
})
export class DestinationJourneyComponent {
  identifier: string;
  type: string;

  constructor(private readonly router: Router) {
    console.log(this.router.getCurrentNavigation(), window.history.state);
    //const state = this.router.getCurrentNavigation()?.extras.state;
    const state = window.history.state as DestinationJourneyNavigationState | undefined;
    this.identifier = state?.identifier || 'null';
    this.type = state?.type || 'null';
  }
}
