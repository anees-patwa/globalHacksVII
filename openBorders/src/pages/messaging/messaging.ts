import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkIfUserLoggedIn();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagingPage');
  }

  checkIfUserLoggedIn(){
  //Check if user is still logged in
  
  var user = firebase.auth().currentUser;
  if (user) {
    console.log("Messaging: User logged in");
    
  } else {
    console.log("Messaging: User not logged in");
  }

  }

}
