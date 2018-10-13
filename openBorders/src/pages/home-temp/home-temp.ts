import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeTempPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-temp',
  templateUrl: 'home-temp.html',
})
export class HomeTempPage {

  visa : String = "";
  industry : String = "";
  exp : String = "";
  lang : String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.push(candidate-list, {
      v: visa, i: industry, e: exp, l: lang
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTempPage');
  }

}
