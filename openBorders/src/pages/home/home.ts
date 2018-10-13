import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular' ;
import { PersonSignupPage } from '../person-signup/person-signup';
import { PopoverPage } from '../popover/popover';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ){}

<<<<<<< HEAD
  presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
    }

  logIn(){
    this.navCtrl.push(PersonSignupPage);
=======

>>>>>>> 4a6c3cc0184a9693b0cc19fd9b6e77b1e07fccbe
  }

}
