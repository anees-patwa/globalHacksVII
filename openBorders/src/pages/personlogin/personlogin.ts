import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import * as firebase from 'firebase';

import { FilterCandidatePage } from '../filter-candidate/filter-candidate';
import { HomeTempPage } from '../home-temp/home-temp';

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
    workexp: null,
    locationYears: 0,
    yearsWorked: 0,
    city: "",
    state: "",
    zip: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }


  signupPerson() {
    var form = this.form;
    var page = this;

    let email = form.email;
    let password = form.password;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then(function() {


      firebase.auth().currentUser.updateProfile({
        displayName: "person",
        photoURL: "",
      }).then(function() {

        let workexp = form.workexp;
        let username = form.username;
        let plang = form.plang;
        let origin = form.origin;
        let locationYears = form.locationYears;
        let yearsWorked = form.yearsWorked;
    
        var languages = [];
        var visas = [];
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
    
        if (form.h1b1) {
          visas.push("h1b");
        }
        if (form.h1b2) {
          visas.push("h2b");
        }
        if (form.green) {
          visas.push("green");
        }
    
    
        firebase.database().ref("people/" + firebase.auth().currentUser.uid).set({
          id: username,
          languages: languages,
          origin: origin,
          preferredLang: plang,
          visas: visas,
          workexp: workexp,
          locationYears: locationYears,
          yearsWorked: yearsWorked,
          ambassador: false,
          email: email,
          city: form.city,
          state: form.state,
          zip: form.zip
        }).then(function() {
          page.events.publish("user:login");
  
          page.navCtrl.setRoot(FilterCandidatePage);
        });
      });
  
  
  
    });

  }
  ionViewDidLoad() {
  }

}

