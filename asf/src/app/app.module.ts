//imports
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SingleSpeakerPage } from '../pages/single-speaker/single-speaker';

//boot
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProgrammePage } from '../pages/programme/programme';
import { PrixPage } from '../pages/prix/prix';
import { ContactPage } from '../pages/contact/contact';
import { InscriptionPage } from '../pages/inscription/inscription';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SingleSpeakerPage,
    ProgrammePage,
    PrixPage,
    ContactPage,
    InscriptionPage
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
    SingleSpeakerPage,
    ProgrammePage,
    PrixPage,
    ContactPage,
    InscriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
