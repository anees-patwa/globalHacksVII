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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeTemp } from '../pages/home-Temp/home-Temp';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

    CandidateListPage,
    CandidateInfoPage,
    CompanyloginPage,
    PersonloginPage,
    HomeTemp
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

    CandidateListPage,
    CandidateInfoPage,
    CompanyloginPage,
    PersonloginPage,
    HomeTemp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
