import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidateListPage } from '../candidate-list/candidate-list';

@IonicPage()
@Component({
  selector: 'page-filter-candidate',
  templateUrl: 'filter-candidate.html',
})
export class FilterCandidatePage {
  filterCand = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterCandidatePage');
  }

  goTo(){
    this.navCtrl.push(CandidateListPage, this.filterCand);
  }

}
