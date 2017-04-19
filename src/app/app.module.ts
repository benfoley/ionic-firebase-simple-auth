import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module'

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'

// providers
import { AuthService } from '../providers/auth-service'
import { DataService } from '../providers/data-service'
import { Util } from '../providers/util'

export const firebaseConfig = {
    apiKey: "<your details here>",
    authDomain: "<your details here>",
    databaseURL: "<your details here>",
    projectId: "<your details here>",
    storageBucket: "<your details here>",
    messagingSenderId: "<your details here>"
}
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AuthService,
    DataService,
    Util,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
