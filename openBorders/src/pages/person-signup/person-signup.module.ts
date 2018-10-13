import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonSignupPage } from './person-signup';

@NgModule({
  declarations: [
    PersonSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonSignupPage),
  ],
})
export class PersonSignupPageModule {}
