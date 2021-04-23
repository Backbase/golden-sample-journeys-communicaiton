import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationJourneyComponent } from './destination-journey.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DestinationJourneyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: DestinationJourneyComponent,
    }]),
  ],
  exports: [DestinationJourneyComponent]
})
export class DestinationJourneyModule { }