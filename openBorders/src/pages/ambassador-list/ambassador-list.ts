import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AmbassadorDetailPage } from '../ambassador-detail/ambassador-detail';
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
  ambassadors = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ref.once('value', resp => {
      this.ambassadors = snapshotToArray(resp);
    }).then(() => this.ambassadors = this.ambassadors.filter(function (item) {
      return item.ambassador != false;
    })).then(() => console.log(this.ambassadors));


    console.log('ionViewDidLoad AmbassadorListPage');
  }

  getAmbassadorDetail(ambassador) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AmbassadorDetailPage, ambassador);
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
