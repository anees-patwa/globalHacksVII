import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { CandidateListPage } from './candidate-list';

@NgModule({
  declarations: [
    CandidateListPage
  ],
  imports: [
    IonicPageModule.forChild(CandidateListPage)
  ],
})
export class CandidateListPageModule {
}
