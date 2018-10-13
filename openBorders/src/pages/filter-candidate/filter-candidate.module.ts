import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterCandidatePage } from './filter-candidate';

@NgModule({
  declarations: [
    FilterCandidatePage,
  ],
  imports: [
    IonicPageModule.forChild(FilterCandidatePage),
  ],
})
export class FilterCandidatePageModule {}
