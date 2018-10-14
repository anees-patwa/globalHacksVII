import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmbassadorListPage } from './ambassador-list';

@NgModule({
  declarations: [
    AmbassadorListPage,
  ],
  imports: [
    IonicPageModule.forChild(AmbassadorListPage),
  ],
})
export class AmbassadorListPageModule {}
