import { Injectable } from '@angular/core';

@Injectable()
export abstract class ISourceJourneyCommunicationService {
  abstract navigate(id: string): void;
}
