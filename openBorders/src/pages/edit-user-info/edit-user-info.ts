import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the EditUserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user-info',
  templateUrl: 'edit-user-info.html',
})
export class EditUserInfoPage {
  form = {
    email: "",
    password: "",
    username: "",
    plang: "",
    origin: "",
    English: "",
    French: "",
    Spanish: "",
    Mandarin: "",
    Arabic: "",
    Hindi: "",
    h1b1: "",
    h1b2: "",
    green: "",
    workexp: "",
  };

  public myUser = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase.database().ref(`people`);
    personRef.on('value', personSnapshot => {
      myPerson = personSnapshot.val();
    });
    console.log('ionViewDidLoad EditUserInfoPage');
  }

  editUser(){

  }

}
