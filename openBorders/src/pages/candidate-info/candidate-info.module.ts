import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateInfoPage } from './candidate-info';

@NgModule({
  declarations: [
    CandidateInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateInfoPage),
  ],
})
export class CandidateInfoPageModule {}
