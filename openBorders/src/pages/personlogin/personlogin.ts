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
  form = {};
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
      console.log(firebase.auth().currentuser);
      
    });

    firebase.auth().currentUser.displayName = "person";



    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonloginPage');
  }

}

