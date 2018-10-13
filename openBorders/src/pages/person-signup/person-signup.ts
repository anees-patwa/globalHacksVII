import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the PersonSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-signup',
  templateUrl: 'person-signup.html',
})
export class PersonSignupPage {
  form = {
    email: "",
    password: "",
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  personLogin() {
    let email = this.form.email;
    let password = this.form.password;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonSignupPage');
  }

}
