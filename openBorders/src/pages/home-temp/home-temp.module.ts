import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTempPage } from './home-temp';

@NgModule({
  declarations: [
    HomeTempPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTempPage),
  ],
})
export class HomeTempPageModule {}
