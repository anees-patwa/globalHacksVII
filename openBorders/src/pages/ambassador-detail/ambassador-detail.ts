import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagingPage } from '../messaging/messaging'

/**
 * Generated class for the AmbassadorDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ambassador-detail',
  templateUrl: 'ambassador-detail.html',
})
export class AmbassadorDetailPage {
  email;
  ambassador;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ambassador = navParams.data;
    console.log(this.ambassador);
    this.email = "mailto::" + this.ambassador.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmbassadorDetailPage');
  }

  contactAmbassador() {
    this.navCtrl.push(MessagingPage, this.ambassador);
  }

}
