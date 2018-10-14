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
    for(let x of currUserInfo.languages){
      if(x === 'h1b'){
        this.form.h1b1 = true;
      }else if (x === 'h2b'){
        this.form.h1b2 = true;
      }else if (x === 'green'){
        this.form.green = true;
      }
    }
    for(let x of currUserInfo.visas){
      if(x === 'english'){
        this.form.English = true;
      }else if (x === 'french'){
        this.form.French = true;
      }else if (x === 'spanish'){
        this.form.Spanish = true;
      }else if (x === 'mandarin'){
        this.form.Mandarin = true;
      }else if (x === 'arabic'){
        this.form.Arabic = true;
      }else if (x === 'hindi'){
        this.form.Hindi = true;
      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserInfoPage');
  }

  editUser(){
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
}
