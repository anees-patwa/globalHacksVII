import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CandidateListPage } from '../pages/candidate-list/candidate-list';
import { CandidateInfoPage } from '../pages/candidate-info/candidate-info';

import { CompanyloginPage } from '../pages/companylogin/companylogin';
import { PersonloginPage } from '../pages/personlogin/personlogin';

import { MessagingPage } from '../pages/messaging/messaging';

import { PersonSignupPage } from '../pages/person-signup/person-signup';

import { CompanyListPage } from '../pages/company-list/company-list';
import { CompanyInfoPage } from '../pages/company-info/company-info';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompanyInfoPage,
    CandidateListPage,
    CandidateInfoPage,
    CompanyloginPage,
    PersonloginPage,
    MessagingPage,
    CompanyListPage,
    PersonSignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CompanyInfoPage,
    CandidateListPage,
    CandidateInfoPage,
    CompanyloginPage,
    PersonloginPage,
    MessagingPage,
    CompanyListPage,
    PersonSignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
