import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatHistoryPage } from '../chat-history/chat-history'

/**
 * Generated class for the CandidateInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidate-info',
  templateUrl: 'candidate-info.html',
})
export class CandidateInfoPage {

  candidate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(navParams);
    this.candidate = navParams.data;
  }

  ionViewDidLoad() {

  }

  contactCandidate() {
    this.navCtrl.setRoot(ChatHistoryPage, this.candidate);
  }

}
