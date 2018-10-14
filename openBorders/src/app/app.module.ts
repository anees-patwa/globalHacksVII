import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CandidateListPage } from '../pages/candidate-list/candidate-list';
import { CandidateInfoPage } from '../pages/candidate-info/candidate-info';

import { CompanyloginPage } from '../pages/companylogin/companylogin';
import { PersonloginPage } from '../pages/personlogin/personlogin';

import { CompanySignupPage } from '../pages/company-signup/company-signup';

import { CompanyListPage } from '../pages/company-list/company-list';
import { CompanyInfoPage } from '../pages/company-info/company-info';


import { MessagingPage } from '../pages/messaging/messaging';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeTempPage } from '../pages/home-temp/home-temp';
import { FilterCandidatePage } from '../pages/filter-candidate/filter-candidate';
import { PopoverPage } from '../pages/popover/popover';

import { PersonSignupPage } from '../pages/person-signup/person-signup';
import { EditUserInfoPage } from '../pages/edit-user-info/edit-user-info';
import {EditCompanyInfoPage} from '../pages/edit-company-info/edit-company-info';

import { SignoutPage } from '../pages/signout/signout';

import { AmbassadorListPage } from '../pages/ambassador-list/ambassador-list';
import { AmbassadorDetailPage } from '../pages/ambassador-detail/ambassador-detail';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CompanyInfoPage,
    CandidateListPage,
    CandidateInfoPage,
    CompanyloginPage,
    PersonloginPage,
    CompanyListPage,
    MessagingPage,
    CompanySignupPage,
    PersonSignupPage,
    HomeTempPage,
    FilterCandidatePage,
    CompanyListPage,
    PersonSignupPage,
    SignoutPage,
    PopoverPage,
    EditUserInfoPage,
    AmbassadorListPage,
    AmbassadorDetailPage,
    EditCompanyInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CompanyInfoPage,
    CandidateListPage,
    CandidateInfoPage,
    CompanyloginPage,
    PersonloginPage,
    CompanyListPage,
    MessagingPage,
    CompanySignupPage,
    PersonSignupPage,
    HomeTempPage,
    FilterCandidatePage,
    CompanyListPage,
    PersonSignupPage,
    SignoutPage,
    PopoverPage,
    EditUserInfoPage,
    AmbassadorListPage,
    AmbassadorDetailPage,
    EditCompanyInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
