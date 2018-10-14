import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';

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
  messages = [];
  message;

  myuid = firebase.auth().currentUser.uid;
  ref = firebase.database().ref("messages");

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.partner = navParams.data;

    console.log(this.partner);
  }

  ionViewDidLoad() {
    this.getMessages();
  }

  getMessages() {

    var page = this;
    var partnerid = this.partner.key;
    var messages = [];

    this.ref.once('value', resp => {
      if (resp) {
        messages = snapshotToArray(resp);
      }
    }).then(() => page.messages = messages.filter(function (item) {
      return (item.sender == page.myuid && item.recipient == partnerid) || (item.recipient == page.myuid && item.sender == partnerid);
    })).then(() => {
      console.log(page.messages);
    });

  }

  
  sendMessage() {

    var page = this;
    if (this.partner.key) {

      firebase.database().ref("messages/" + new Date().valueOf()).set({
        recipient: this.partner.key,
        sender: firebase.auth().currentUser.uid,
        message: this.message
      }).then(function () {
        page.message = "";
        page.getMessages();
      });
    }
  }

  refreshMessages() {
    this.getMessages();
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    //console.log(childSnapshot.key);
    let item = childSnapshot.val();
    returnArr.push(item);
  });

  return returnArr;
};
