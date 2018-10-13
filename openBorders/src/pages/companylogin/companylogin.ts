import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the CompanyloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companylogin',
  templateUrl: 'companylogin.html',
})
export class CompanyloginPage {
  form = {
    email: "",
    password: "",
    username: "",
    size: "",
    location: "",
    city: "",
    state: "",
    zip: "",
    h1b1: "",
    h1b2: "",
    green: "",
    industry: ""
  };
  ref = firebase.database().ref("companies");
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  /*goToHome() {
    this.signupCompany();
    this.navCtrl.push(HomePage);
  }*/

  signupCompany() {
    let email = this.form.email;
    let password = this.form.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });

    firebase.auth().currentUser.displayName = "company";
    let username = this.form.username;
    let size = this.form.size;
    let location = this.form.location;
    let city = this.form.city;
    let state = this.form.state;
    let zip = this.form.zip;
    let industry = this.form.industry;
    let h1b1 = this.form.h1b1;
    let h1b2 = this.form.h1b2;

    let visas = [];
    if (h1b1) {
      visas.push("H1B1");
    }
    if (h1b2) {
      visas.push("H1B2");
    }

    firebase.database().ref("companies/" + username).set({
      id: username,
      city: city,
      "company size": size,
      email: email,
      industry: industry,
      location: location,
      state: state,
      zip: zip,
      visas: visas,
    })



    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyloginPage');
  }

}
