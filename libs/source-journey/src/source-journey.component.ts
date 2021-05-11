import { Component, Optional } from '@angular/core';
import { ISourceJourneyEventService } from './event.service';

@Component({
  selector: 'bb-source-journey',
  template: `<button (click)="onClick()">Let's talk</button>`,
})
export class SourceJourneyComponent {
  constructor(@Optional() private readonly service: ISourceJourneyEventService) {}

  onClick() {
    if (this.service) {
      this.service.talk('ABC');
    } else {
      console.warn('Navigation service not provided');
    }
  }
}
