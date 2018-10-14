import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';

import { MessagesPage } from '../messages/messages';

/**
 * Generated class for the MessagingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {

  recipient;
  message;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipient = navParams.data;
  }

  ionViewDidLoad() {
  }

  sendMessage() {

    var page = this;
    if (this.recipient.key) {

      firebase.database().ref("messages/" + new Date().valueOf()).set({
        recipient: this.recipient.key,
        sender: firebase.auth().currentUser.uid,
        message: this.message
      }).then(function () {
        page.navCtrl.push(MessagesPage);
      });
    }
  }

}
