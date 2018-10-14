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

    firebase.auth().currentUser.updateProfile({
      displayName: "person",
      photoURL: "",
    })

    let workexp = this.form.workexp;
    let username = this.form.username;
    let plang = this.form.plang;
    let origin = this.form.origin;

    var languages = [];
    var visas = [];
    if (this.form.English) {
      languages.push("english");
    }
    if (this.form.French) {
      languages.push("french");
    }
    if (this.form.Spanish) {
      languages.push("spanish");
    }
    if (this.form.Mandarin) {
      languages.push("mandarin");
    }
    if (this.form.Arabic) {
      languages.push("arabic");
    }
    if (this.form.Hindi) {
      languages.push("hindi");
    }

    if (this.form.h1b1) {
      visas.push("h1b");
    }
    if (this.form.h1b2) {
      visas.push("h2b");
    }
    if (this.form.green) {
      visas.push("green");
    }


    firebase.database().ref("people/" + email).set({
      id: username,
      languages: languages,
      origin: origin,
      preferredLang: plang,
      visas: visas,
      workexp: workexp
    });


    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
  }

}

