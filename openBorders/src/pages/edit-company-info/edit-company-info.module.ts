import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCompanyInfoPage } from './edit-company-info';

@NgModule({
  declarations: [
    EditCompanyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCompanyInfoPage),
  ],
})
export class EditCompanyInfoPageModule {}
