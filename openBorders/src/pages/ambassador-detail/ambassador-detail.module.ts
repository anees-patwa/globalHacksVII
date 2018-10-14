import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmbassadorDetailPage } from './ambassador-detail';

@NgModule({
  declarations: [
    AmbassadorDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AmbassadorDetailPage),
  ],
})
export class AmbassadorDetailPageModule {}
