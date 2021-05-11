import { Injectable } from '@angular/core';

@Injectable()
export abstract class ISourceJourneyEventService {
  abstract talk(id: string): void;
}
