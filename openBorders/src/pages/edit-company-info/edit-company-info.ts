import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomeTempPage} from '../home-temp/home-temp';
import * as firebase from 'firebase';
/**
 * Generated class for the EditCompanyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-company-info',
  templateUrl: 'edit-company-info.html',
})
export class EditCompanyInfoPage {
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
    green: false,
    industry: "",
    English: false,
    French: false,
    Spanish: false,
    Mandarin: false,
    Arabic: false,
    Hindi: false,
    plang: "",
  };
  myUser;
  ref;
  currUserInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myUser = firebase.auth().currentUser.uid;
    console.log(this.myUser);
    this.ref = firebase.database().ref("companies/" + firebase.auth().currentUser.uid);
    this.ref.once('value', resp => {
      //this.currUserInfo = snapshotToArray(resp);
      this.currUserInfo = resp.val();
      //console.log(this.currUserInfo);
      this.form.username = this.currUserInfo.id;
      this.form.city = this.currUserInfo.city;
      this.form.size = this.currUserInfo["company size"];
      this.form.email = this.currUserInfo.email;
      this.form.industry = this.currUserInfo.industry;
      this.form.location = this.currUserInfo.location;
      this.form.state = this.currUserInfo.state;
      this.form.zip = this.currUserInfo.zip;
      this.form.plang = this.currUserInfo.plang;
      let form = this.form;
      this.currUserInfo.visas.forEach(function(x){
        if(x == 'h1b'){
          form.h1b1 = true;
          //console.log(form.h1b1);
        }
        if (x == 'h2b'){
          form.h1b2 = true;
        }
        if (x == 'green'){
          form.green = true;
        }
      });
      this.currUserInfo.languages.forEach(function(x){
        if(x == 'english'){
          form.English = true;
        }
        if (x == 'french'){
          form.French = true;
        }
        if (x == 'spanish'){
          form.Spanish = true;
        }
        if (x == 'mandarin'){
          form.Mandarin = true;
        }
        if (x == 'arabic'){
          form.Arabic = true;
        }
        if (x == 'hindi'){
          form.Hindi = true;
        }
      });


      /*console.log(this.currUserInfo);
      var username = document.getElementById('username');
      console.log(username.value);
      username.value = this.currUserInfo.id;
      console.log(username.value);
      var origin = document.getElementById('origin');
      origin.value = this.currUserInfo.origin;
      var plang = document.getElementById('plang');
      plang.value = this.currUserInfo.preferredLang;
      var workexp = document.getElementById('workexp');
      workexp.value = this.currUserInfo.workexp;*/

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyInfoPage');
  }

  editCompany() {
    let email = this.form.email;
    /*let password = this.form.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    }).then(function () {*/

      firebase.auth().currentUser.updateProfile({
        displayName: "company",
        photoURL: "",
      });
      let uid = firebase.auth().currentUser.uid;
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
        visas.push("H1B");
      }
      if (h1b2) {
        visas.push("H2B");
      }

      let languages = [];
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
        plang: this.form.plang,
      })

      this.navCtrl.setRoot(HomeTempPage);
    //});



  }

}
