import { Component, Optional } from '@angular/core';
export abstract class CommunicationService {
  abstract event(): void;
  abstract eventWithPayload(_: string): void;
}

@Component({
  selector: 'bb-source-journey',
  template: `<button (click)="onClick()">Let's talk</button>
    <button (click)="onClickWithPayload()">Let's talk with voice</button> `,
})
export class SourceJourneyComponent {
  constructor(@Optional() private communicationService: CommunicationService) {}

  onClick() {
    if (this.communicationService) {
      this.communicationService.event();
    }
  }

  onClickWithPayload() {
    if (this.communicationService) {
      this.communicationService.eventWithPayload('123');
    }
  }
}
