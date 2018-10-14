import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditUserInfoPage } from '../edit-user-info/edit-user-info';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-edit-user-info',
  templateUrl: 'edit-user-info.html',
})

export class EditUserInfoPage {

   myUser;
   ref;
   currUserInfo;
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

    //console.log(this.currUserInfo.ambassador);
    /*this.myUser = firebase.auth().currentUser.uid;
    console.log(this.myUser);
    this.ref = firebase.database().ref("people/" + firebase.auth().currentUser.uid);
    this.ref.once('value', resp => {
      //this.currUserInfo = snapshotToArray(resp);
      this.currUserInfo = resp.val();
    });*/

    //console.log("data loaded");


  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter EditUserInfoPage');
  }

ionViewCanEnter(): boolean {
  this.myUser = firebase.auth().currentUser.uid;
  console.log(this.myUser);
  this.ref = firebase.database().ref("people/" + firebase.auth().currentUser.uid);
  this.ref.once('value', resp => {
    //this.currUserInfo = snapshotToArray(resp);
    this.currUserInfo = resp.val();
  });
  if(this.currUserInfo !== null){
    console.log("canLoad");
    return true;
  } else {
    console.log("cannotLoad");
    return false;
}
}

/*dataLoad(){
  this.myUser = firebase.auth().currentUser.uid;
  console.log(this.myUser);
  this.ref = firebase.database().ref("people/" + firebase.auth().currentUser.uid);
  this.ref.once('value', resp => {
    //this.currUserInfo = snapshotToArray(resp);
    this.currUserInfo = resp.val();
  })
    this.currUserInfo.languages.forEach(function(x){
      if(x === 'h1b'){
        this.form.h1b1 = true;
      }
      if (x === 'h2b'){
        this.form.h1b2 = true;
      }
      if (x === 'green'){
        this.form.green = true;
      }
    });
    this.currUserInfo.visas.forEach(function(x){
      if(x === 'english'){
        this.form.English = true;
      }
      if (x === 'french'){
        this.form.French = true;
      }
      if (x === 'spanish'){
        this.form.Spanish = true;
      }
      if (x === 'mandarin'){
        this.form.Mandarin = true;
      }
      if (x === 'arabic'){
        this.form.Arabic = true;
      }
      if (x === 'hindi'){
        this.form.Hindi = true;
      }
    });
    console.log("data loaded");
    return true;

}*/

/*ionViewCanEnter(){
  if(dataLoad()){
    return true;
  } else {
    return false;
  }
}*/



  editUser(){
    let email = this.form.email;
    let password = this.form.password;
    /*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });*/

    /*firebase.auth().currentUser.updateProfile({
      displayName: "person",
      photoURL: "",
    })*/

    let uid = firebase.auth().currentUser.uid;

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

    firebase.database().ref("people/" + uid).set({
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

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    returnArr.push(item);
  });

  return returnArr;
};
