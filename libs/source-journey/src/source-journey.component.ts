import { Component, Inject, InjectionToken, Optional } from '@angular/core';
import { Subject } from 'rxjs';

type TalkService = Subject<{ identifier: string; type: string }>;
export const sourceJourneyDataToken = new InjectionToken<Subject<{ identifier: string; type: string }>>(
  'bb-source-journey Data',
);

@Component({
  selector: 'bb-source-journey',
  template: `<button (click)="onClick()">Let's talk</button>`,
})
export class SourceJourneyComponent {
  constructor(@Optional() @Inject(sourceJourneyDataToken) private talkService: TalkService) {}

  onClick() {
    if (this.talkService) {
      this.talkService.next({ identifier: 'ABC', type: 'Test' });
    } else {
      console.warn('Talk service not provided');
    }
  }
}
