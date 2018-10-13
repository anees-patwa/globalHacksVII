import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-person-signup',
  templateUrl: 'person-signup.html',
})
export class PersonSignupPage {
  form = {
    email: "",
    password: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  personLogin() {
    
    let email = this.form.email;
    let password = this.form.password;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      this.events.publish("user:login");
      
      // ...
    });

    this.navCtrl.setRoot(FilterCandidatePage);

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonSignupPage');
  }

}
