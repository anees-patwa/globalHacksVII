import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CandidateListPage } from '../pages/candidate-list/candidate-list';
import { CompanyloginPage } from '../pages/companylogin/companylogin';
import { PersonloginPage } from '../pages/personlogin/personlogin';
import { CompanyListPage } from '../pages/company-list/company-list';
import { HomeTempPage } from '../pages/home-temp/home-temp';
import { FilterCandidatePage } from '../pages/filter-candidate/filter-candidate';
import { PopoverPage } from '../pages/popover/popover';

// import { CandidateListPage } from '../pages/candidate-list/candidate-list';
// import { CompanyloginPage } from '../pages/companylogin/companylogin';
// import { PersonloginPage } from '../pages/personlogin/personlogin';

import { PersonSignupPage } from '../pages/person-signup/person-signup';
import { EditUserInfoPage } from '../pages/edit-user-info/edit-user-info';


//import { CompanyListPage } from '../pages/company-list/company-list';
import { SignoutPage } from '../pages/signout/signout';


import { Events } from 'ionic-angular';

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

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Candidates', component: CandidateListPage },
      { title: 'CompanyLogin', component: CompanyloginPage },
      { title: 'PersonLogin', component: PersonloginPage },
      { title: 'HomeTemplate', component: HomeTempPage},
      { title: 'FilterCandidate', component: FilterCandidatePage},
      { title: 'Companies', component: CompanyListPage },
      { title: 'popOver', component: PopoverPage},
      { title: 'editUser', component: EditUserInfoPage}
    ];
    this.populatePages();

    events.subscribe('user:login', () => {
      this.populatePages();
    });

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

  populatePages() {
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

    // { title: 'Candidates', component: CandidateListPage },
    // { title: 'CompanyLogin', component: CompanyloginPage },
    // { title: 'PersonLogin', component: PersonloginPage },
    // { title: 'HomeTemplate', component: HomeTempPage},
    // { title: 'FilterCandidate', component: FilterCandidatePage},
    // { title: 'Companies', component: CompanyListPage }

    if (firebase.auth().currentUser) {
      console.log(firebase.auth().currentUser.displayName);
      if(firebase.auth().currentUser.displayName == "person") {
        this.pages.push({ title: 'Companies', component: FilterCandidatePage});
      } else {
        this.pages.push({ title: 'Candidates', component: HomeTempPage});
      }


      //this.pages.push({ title: 'Messages', component: MessagesPage });
      this.pages.push({ title: 'Sign Out', component: SignoutPage});
    } else {
      this.pages.push({ title: 'Companies', component: FilterCandidatePage});
      this.pages.push({ title: 'Login', component: PersonSignupPage });
      this.pages.push({ title: 'Edit User', component: EditUserInfoPage});
    }

    console.log(this.pages);
  }
}
