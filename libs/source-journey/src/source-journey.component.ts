import { Component, Optional } from '@angular/core';
import { ISourceJourneyCommunicationService } from './communication.service';

@Component({
  selector: 'bb-source-journey',
  template: `<button (click)="onClick()">Let's talk</button>`,
})
export class SourceJourneyComponent {
  constructor(@Optional() private readonly service: ISourceJourneyCommunicationService) {}

  onClick() {
    if (this.service) {
      this.service.navigate('ABC');
    } else {
      console.warn('Navigation service not provided');
    }
  }
}
