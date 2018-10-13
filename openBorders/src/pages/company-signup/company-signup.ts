import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { FilterCandidatePage } from '../filter-candidate/filter-candidate';
import { HomeTempPage } from '../home-temp/home-temp';
/**
 * Generated class for the CompanySignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-signup',
  templateUrl: 'company-signup.html',
})
export class CompanySignupPage {
  form = {
    email: "",
    password: "",
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  companyLogin() {
    let email = this.form.email;
    let password = this.form.password;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    this.navCtrl.setRoot(HomeTempPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanySignupPage');
  }

}
