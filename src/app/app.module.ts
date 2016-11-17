import { NgModule } from '@angular/core'
import { IonicApp, IonicModule } from 'ionic-angular'
import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { LoginPage } from '../pages/login/login'
import { UploadPage } from '../pages/upload/upload'
import { SpinnerComponent } from '../components/spinner/spinner'


// providers
import { AuthService } from '../providers/auth-service'
import { DataService } from '../providers/data-service'
import { Util } from '../providers/util'

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'

export const firebaseConfig = {
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
    UploadPage,
    SpinnerComponent
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
    DataService,
    Util
  ]
})
export class AppModule {}
