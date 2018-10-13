import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidateListPage } from '../candidate-list/candidate-list';

@IonicPage()
@Component({
  selector: 'page-home-temp',
  templateUrl: 'home-temp.html',
})
export class HomeTempPage {
  filter = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTempPage');
  }

  goTo(){
    this.navCtrl.push(CandidateListPage, this.filter);
  }

}
