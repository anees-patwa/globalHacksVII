import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';

import{ ChatHistoryPage } from '../chat-history/chat-history';
/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  myuid = firebase.auth().currentUser.uid;
  ref = firebase.database().ref("messages");

  partners = [];
  //messages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getMessages();
  }

  getMessages() {

    var page = this;
    var messages = [];
    var partnerids = [];

    this.ref.once('value', resp => {
      if (resp) {
        messages = snapshotToArray(resp);
      }
    }).then(() => messages = messages.filter(function (item) {
      return item.sender == page.myuid || item.recipient == page.myuid;
    })).then(() => {
      messages.forEach(message => {
        console.log(message);
        if (message.recipient == page.myuid) {
          console.log("sender");
          if (partnerids.indexOf(message.sender) < 0) {
            partnerids.push(message.sender);
          }
        } else {

          if (partnerids.indexOf(message.recipient) < 0) {
            partnerids.push(message.recipient);
          }
        }
      });

      if (partnerids.length) {
        partnerids.forEach(partner => {
          var person = firebase.database().ref('people/' + partner);
          person.once('value', p => {
            if (p) {
              var item = p.val();
              if (item) {
                item.key = p.key;
                page.partners.push(item);
              }
            }
          });

          var company = firebase.database().ref('companies/' + partner);
          company.once('value', p => {
            if (p) {
              var item = p.val();
              if (item) {
                item.key = p.key;
                page.partners.push(item);
              }
            }
          });
        })
      } 

      console.log(messages);
      console.log(page.partners);
    });
  }


  getMessageHistory(partner) {
    console.log(partner);
    this.navCtrl.push(ChatHistoryPage, partner);
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    returnArr.push(item);
  });

  return returnArr;
};
