import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-history',
  templateUrl: 'chat-history.html',
})
export class ChatHistoryPage {

  partner;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.partner = navParams.data;
  }

  ionViewDidLoad() {
  }

}
