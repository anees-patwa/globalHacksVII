import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyInfoPage } from '../company-info/company-info';

import * as firebase from 'firebase';
/**
 * Generated class for the CompanyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {
  ref = firebase.database().ref("companies");
  companies = [];
  filter = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams && navParams.data) {
      this.filter = navParams.data;
    }
  }

  ionViewDidLoad() {
    this.ref.once('value', resp => {
      this.companies = snapshotToArray(resp, this.filter);
    });
  }

  getCompanyDetail(company) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CompanyInfoPage, company);
  }

}


export const snapshotToArray = (snapshot, filter) => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {

    let item = childSnapshot.val();

    if (filter.city && (item.city != filter.city)) {
      return false;
    }

    if (filter.state && (item.state != filter.state)) {
      return false;
    }

    if (filter.zip && (item.zip != filter.zip)) {
      return false;
    }

    if (filter.language) {
      var languageMatch = false;

      if (item.languages) {
        item.languages.forEach(language => {
          if (filter.language == language) {
            languageMatch = true;
          }
        });
      }

      if (!languageMatch) {
        return false;
      }
    }

    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
