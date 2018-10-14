import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import * as firebase from 'firebase';
import { FilterCandidatePage } from '../filter-candidate/filter-candidate';
import { HomeTempPage } from '../home-temp/home-temp';
/**
 * Generated class for the PersonSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    var page = this;
    let email = this.form.email;
    let password = this.form.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      page.events.publish("user:login");
      if (firebase.auth().currentUser.displayName == "person") {
        page.navCtrl.setRoot(FilterCandidatePage);
      } else {
        page.navCtrl.setRoot(HomeTempPage);
      }
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      
      // ...
    });


  }
  ionViewDidLoad() {
  }

}
