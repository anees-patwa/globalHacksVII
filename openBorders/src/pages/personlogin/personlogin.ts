import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the PersonloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personlogin',
  templateUrl: 'personlogin.html',
})
export class PersonloginPage {
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
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  signupPerson() {
    let email = this.form.email;
    let password = this.form.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    firebase.auth().currentUser.displayName = "person";

    let username = this.form.username;
    let plang = this.form.plang;
    let origin = this.form.origin;
    let English = "";
    if (this.form.English) {
      English = "english";
    }
    let French = "";
    if (this.form.French) {
      French = "french";
    }
    let Spanish = "";
    if (this.form.Spanish) {
      Spanish = "spanish";
    }
    let Mandarin = "";
    if (this.form.Mandarin) {
      Mandarin = "mandarin";
    }
    let Arabic = "";
    if (this.form.Arabic) {
      Arabic = "arabic";
    }
    let Hindi = "";
    if (this.form.Hindi) {
      Hindi = "hindi";
    }

    let h1b1 = "";
    if (this.form.h1b1) {
      h1b1 = "H1B1";
    }
    let h1b2 = "";
    if (this.form.h1b2) {
      h1b2 = "H1B2";
    }
    let green = "";
    if (this.form.green) {
      green = "Green Card";
    }


    firebase.database().ref("people/" + username).set({
      id: username,
      languages: [English, Spanish, French, Mandarin, Arabic, Hindi],
      origin: origin,
      preferredLang: plang,

    });


    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonloginPage');
  }

}

