import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUserInfoPage } from './edit-user-info';

@NgModule({
  declarations: [
    EditUserInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditUserInfoPage),
  ],
})
export class EditUserInfoPageModule {}
