import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //ref = firebase.database().ref();

  content = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   this.ref.on('value', resp => {
  //     this.content = snapshotToArray(resp);
  //     console.log(this.content);
  //   }
  //   );
   }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    //item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

