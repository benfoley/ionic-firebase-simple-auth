import { NgModule } from '@angular/core'
import { IonicApp, IonicModule } from 'ionic-angular'
import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { LoginPage } from '../pages/login/login'
import { UploadPage } from '../pages/upload/upload'

// providers
import { AuthService } from '../providers/auth-service'
import { Util } from '../providers/util'

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'

export const firebaseConfig = {
  // apiKey: "YOUR VALUES HERE",
  // authDomain: "YOUR VALUES HERE",
  // databaseURL: "YOUR VALUES HERE",
  // storageBucket: "YOUR VALUES HERE",
  // messagingSenderId: "YOUR VALUES HERE"
}
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UploadPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UploadPage
  ],
  providers: [
    AuthService,
    Util
  ]
})
export class AppModule {}
