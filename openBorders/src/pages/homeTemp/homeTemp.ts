import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-homeTemp',
  templateUrl: 'homeTemp.html'
})

export class HomeTemp{

  filterQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController){

  }

  // initializeItems(){
  //   // This will be where applicant data will be stored
  //   // Pull from firebase probably
  //   this.items = [
  //
  //   ];
  // }
}
