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
import { CompanyListPage } from '../pages/company-list/company-list';
import { CompanyInfoPage } from '../pages/company-info/company-info';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeTempPage } from '../pages/home-temp/home-temp';
import { FilterCandidatePage } from '../pages/filter-candidate/filter-candidate';
import { PopoverPage } from '../pages/popover/popover';

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
    HomeTempPage,
    FilterCandidatePage,
    CompanyListPage,
    PopoverPage
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
    HomeTempPage,
    FilterCandidatePage,
    CompanyListPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
