import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceJourneyComponent } from './lib/source-journey/source-journey.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SourceJourneyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: SourceJourneyComponent,
    }]),
  ],
  exports: [SourceJourneyComponent]
})
export class SourceJourneyModule { }