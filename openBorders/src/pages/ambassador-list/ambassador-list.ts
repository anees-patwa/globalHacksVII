import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AmbassadorDetailPage } from '../ambassador-detail/ambassador-detail';
import { injectViewContainerRef } from '@angular/core/src/render3';
/**
 * Generated class for the AmbassadorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ambassador-list',
  templateUrl: 'ambassador-list.html',
})
export class AmbassadorListPage {
  ref = firebase.database().ref("people/");
  me = firebase.database().ref("people/" + firebase.auth().currentUser.uid);

  ambassadors = [];
  locationYears = 0;
  isAmbassador = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.me.once('value', resp => {
      var val = resp.val();
      console.log(val);

      if (val && val.locationYears) {
        this.locationYears = parseInt(val.locationYears);
      }
      if (val.ambassador) {
        this.isAmbassador = val.ambassador;
      }

      console.log(this.locationYears);
      console.log(this.isAmbassador);
    });
  }

  ionViewDidLoad() {
    this.getAmbassadors();

  }

  getAmbassadors() {
    this.ref.once('value', resp => {
      this.ambassadors = snapshotToArray(resp);
    }).then(() => this.ambassadors = this.ambassadors.filter(function (item) {
      return item.ambassador != false;
    })).then(() => console.log(this.ambassadors));

  }

  getAmbassadorDetail(ambassador) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AmbassadorDetailPage, ambassador);
  }

  applyForAmbassadorship() {
    this.me.update({"ambassador": true});

    this.isAmbassador = true;
    
    this.getAmbassadors();
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
