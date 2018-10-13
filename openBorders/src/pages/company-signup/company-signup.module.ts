import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanySignupPage } from './company-signup';

@NgModule({
  declarations: [
    CompanySignupPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanySignupPage),
  ],
})
export class CompanySignupPageModule {}
