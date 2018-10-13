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
  languageFilter;
  skillFilter;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.ref.once('value', resp => {
      this.candidates = snapshotToArray(resp);
    });
  }

  getUserDetail(candidate) {
    this.navCtrl.push(CandidateInfoPage, candidate);
  }

  filterCandidates() {
  let filterPromises = [];

    if (this.languageFilter) {
      filterPromises.concat(this.languageFilter.map(id => {
        return this.ref.child('languages').child(id).on('value', s => s)
      })
      );
    }

    if (this.skillFilter) {
      filterPromises.concat(this.skillFilter.map(id => {
        return this.ref.child('skills').child(id).on('value', s => s)
      })
      );
    }

    Promise.all(filterPromises)
      .then(resp =>
        this.candidates = snapshotToArray(resp)
      );

      console.log("filtered candidates: ");
      console.log(this.candidates);
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
