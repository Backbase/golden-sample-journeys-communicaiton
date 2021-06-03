import { Component, Optional } from '@angular/core';

export interface CommunicationService {
  event(): void;
  eventWithPayload(id: string): void;
}

export class CommunicationServiceDefault implements CommunicationService {
  event(): void {
    // This is intentional
  }
  eventWithPayload(_: string): void {
    // This is intentional
  }
}

@Component({
  selector: 'bb-source-journey',
  template: `<button (click)="onClick()">Let's talk</button>
    <button (click)="onClickWithPayload()">Let's talk with voice</button> `,
})
export class SourceJourneyComponent {
  constructor(@Optional() private communicationService: CommunicationServiceDefault) {
    this.communicationService = this.communicationService || new CommunicationServiceDefault();
  }

  onClick() {
    this.communicationService.event();
  }

  onClickWithPayload() {
    this.communicationService.eventWithPayload('123');
  }
}
