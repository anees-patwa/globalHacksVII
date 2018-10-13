import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MessagingPage } from '../messaging/messaging';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-person-signup',
  templateUrl: 'person-signup.html',
})
export class PersonSignupPage {
  form = {};
  email: string;
  password: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  personLogin() {
      console.log("Passes");
      
      let email = this.email;
      let password = this.password;
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });

      // Checks to see if there is a current user
      var user = firebase.auth().currentUser;
      if (user) {
        console.log("works");
      } else {
        console.log("fails");
      }
      
      // Navigate to chat page
      this.navCtrl.push(MessagingPage);
      console.log("After messaging");

    }
  

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Invalid Login',
      subTitle: 'Please enter correct credentials',
      buttons: ['Dismiss']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonSignupPage');
  }

}
