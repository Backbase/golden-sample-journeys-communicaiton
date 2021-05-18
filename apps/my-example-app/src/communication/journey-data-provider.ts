import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationJourneyNavigationState } from '@backbase/destination-journey';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JourneyDataProvider
  extends BehaviorSubject<DestinationJourneyNavigationState | null>
  implements OnDestroy {
  constructor(readonly router: Router) {
    super(null);
  }

  next(value: DestinationJourneyNavigationState | null) {
    this.router.navigate(['dest-journey']).then(() => {
      super.next(value);
    });
  }

  complete() {
    /* noop */
  }

  ngOnDestroy(): void {
    super.complete();
  }
}
