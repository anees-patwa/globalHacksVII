import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { EditUserInfoPage } from '../edit-user-info/edit-user-info';

@IonicPage()
@Component({
  selector: 'page-edit-user-info',
  templateUrl: 'edit-user-info.html',
})
export class EditUserInfoPage {
  myUser;
  email;
  curreUserInfo;
  form = {
    email: "",
    password: "",
    username: "",
    plang: "",
    origin: "",
    English: false,
    French: false,
    Spanish: false,
    Mandarin: false,
    Arabic: false,
    Hindi: false,
    h1b1: false,
    h1b2: false,
    green: false,
    workexp: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    myUser = firebase.auth().currentUser;
    email = myUser.email;
    currUserInfo = firebase.database().ref("people/" + email);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserInfoPage');
  }

  editUser(){

  }
}
