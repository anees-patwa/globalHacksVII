import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidateInfoPage } from '../candidate-info/candidate-info';

import * as firebase from 'firebase';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.ref.on('value', resp => {
      this.candidates = snapshotToArray(resp);
    }
    );
  }

  getUserDetail(candidate) {
    this.navCtrl.push(CandidateInfoPage, candidate);
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
