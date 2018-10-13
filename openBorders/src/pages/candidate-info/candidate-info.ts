import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CandidateInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidate-info',
  templateUrl: 'candidate-info.html',
})
export class CandidateInfoPage {

  candidate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(navParams);
    this.candidate = navParams.data;
    console.log(this.candidate);
  }

  ionViewDidLoad() {

  }

  contactCandidate() {
    console.log('contactCandidate clicked');
  }

}
