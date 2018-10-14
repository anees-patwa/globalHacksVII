import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatHistoryPage } from '../chat-history/chat-history'

/**
 * Generated class for the CompanyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-info',
  templateUrl: 'company-info.html',
})
export class CompanyInfoPage {

  company;
  email;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.company = navParams.data;
    this.email = "mailto::" + this.company.email;
  }

  ionViewDidLoad() {
    
  }

  contactCompany() {
    this.navCtrl.push(ChatHistoryPage, this.company);
  }

}
