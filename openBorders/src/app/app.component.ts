import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CandidateListPage } from '../pages/candidate-list/candidate-list';
import { CompanyloginPage } from '../pages/companylogin/companylogin';
import { PersonloginPage } from '../pages/personlogin/personlogin';
import { MessagingPage } from '../pages/messaging/messaging';
import { CompanyListPage } from '../pages/company-list/company-list';
import { PersonSignupPage } from '../pages/person-signup/person-signup';

import { HomeTempPage } from '../pages/home-temp/home-temp';
import { FilterCandidatePage } from '../pages/filter-candidate/filter-candidate';





//add this import statement to any component needing firebase
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCQX9BOrQGk-z3fQusbzqff5XOLTETAz4o",
  authDomain: "openborder-68e90.firebaseapp.com",
  databaseURL: "https://openborder-68e90.firebaseio.com",
  projectId: "openborder-68e90",
  storageBucket: "openborder-68e90.appspot.com",
  messagingSenderId: "471400892590",
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Candidates', component: CandidateListPage},
      { title: 'Company Login', component: CompanyloginPage },
      { title: 'Person Login', component: PersonloginPage },
      { title: 'Messages', component: MessagingPage},
      { title: 'Candidates', component: CandidateListPage },
      { title: 'Messages', component: MessagingPage },
      { title: 'CompanySignup', component: CompanyloginPage },
      { title: 'PersonSignup', component: PersonloginPage },

      { title: 'HomeTemplate', component: HomeTempPage },
      { title: 'FilterCandidate', component: FilterCandidatePage },

      { title: 'Companies', component: CompanyListPage },
      { title: "Person Login Page", component: PersonSignupPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    firebase.initializeApp(config);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
