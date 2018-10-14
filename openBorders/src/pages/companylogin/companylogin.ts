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
    h1b1: false,
    h1b2: false,
    green: "",
    industry: "",
    English: false,
    French: false,
    Spanish: false,
    Mandarin: false,
    Arabic: false,
    Hindi: false,
    plang: "",

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
    let form = this.form;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    }).then(function () {

      firebase.auth().currentUser.updateProfile({
        displayName: "company",
        photoURL: "",
      });
      let uid = firebase.auth().currentUser.uid;
      let username = form.username;
      let size = form.size;
      let location = form.location;
      let city = form.city;
      let state = form.state;
      let zip = form.zip;
      let industry = form.industry;
      let h1b1 = form.h1b1;
      let h1b2 = form.h1b2;

      let visas = [];
      if (h1b1) {
        visas.push("H1B");
      }
      if (h1b2) {
        visas.push("H2B");
      }

      let languages = [];
      if (form.English) {
        languages.push("english");
      }
      if (form.French) {
        languages.push("french");
      }
      if (form.Spanish) {
        languages.push("spanish");
      }
      if (form.Mandarin) {
        languages.push("mandarin");
      }
      if (form.Arabic) {
        languages.push("arabic");
      }
      if (form.Hindi) {
        languages.push("hindi");
      }

      firebase.database().ref("companies/" + uid).set({
        id: username,
        city: city,
        "company size": size,
        email: email,
        industry: industry,
        location: location,
        state: state,
        zip: zip,
        visas: visas,
        languages: languages,
        plang: form.plang,
      }).then(function () {
        this.navCtrl.setRoot(HomePage);
      });
    });



  }

  ionViewDidLoad() {
  }

}
