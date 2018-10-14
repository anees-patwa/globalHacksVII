import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidateInfoPage } from '../candidate-info/candidate-info';

import * as firebase from 'firebase';
import { NgModel } from '@angular/forms';
/**
 * Generated class for the CandidateListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidate-list',
  templateUrl: 'candidate-list.html',
})
export class CandidateListPage {

  ref = firebase.database().ref("people");
  candidates = [];
  filter;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams && navParams.data) {
      this.filter = navParams.data;
      console.log(this.filter);
    }
  }

  ionViewDidLoad() {
    this.ref.once('value', resp => {
      this.candidates = snapshotToArray(resp, this.filter);
    });
  }

  getUserDetail(candidate) {
    this.navCtrl.push(CandidateInfoPage, candidate);
  }

}

export const snapshotToArray = (snapshot, filter) => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();

    if (filter.exp) {

      if (!item.workexp) {
        return false;
      }
      
      var workexp = parseInt(item.workexp);

      if (isNaN(workexp)) {
        return false;
      }

      console.log(workexp);

      if (parseInt(filter.exp) >= workexp) {
        return false;
      }
    }

    if (filter.language) {
      var languageMatch = false;

      if (item.preferredLang && (filter.language == item.preferredLang.toLowerCase())) {
          languageMatch = true;
      } else {
        if (item.languages) {
          item.languages.forEach(language => {
            if (filter.language == language) {
              languageMatch = true;
            }
          });
        }
      }

      if (!languageMatch) {
        return false;
      }
    }

    if (filter.visa) {
      var visaMatch = false;

      if (item.visas) {
        item.visas.forEach(visa => {
          if (filter.visa == visa) {
            visaMatch = true;
          }
        });
      }

      if (!visaMatch) {
        return false;
      }
    }

    returnArr.push(item);
  });

  return returnArr;
};
