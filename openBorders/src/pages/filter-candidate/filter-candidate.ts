import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyListPage } from '../company-list/company-list';

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
    console.log(this.filterCand);
    this.navCtrl.push(CompanyListPage, this.filterCand);
  }

}
