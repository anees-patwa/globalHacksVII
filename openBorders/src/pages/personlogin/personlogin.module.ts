import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonloginPage } from './personlogin';

@NgModule({
  declarations: [
    PersonloginPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonloginPage),
  ],
})
export class PersonloginPageModule {}
