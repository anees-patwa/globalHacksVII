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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ref.once('value', resp => {
      this.companies = snapshotToArray(resp);
    });
  }

  getCompanyDetail(company) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CompanyInfoPage, company);
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
