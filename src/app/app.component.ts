import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar, Splashscreen } from 'ionic-native'

import { HomePage } from '../pages/home/home'
import { LoginPage } from '../pages/login/login'
import { UploadPage } from '../pages/upload/upload'
import { AngularFire } from 'angularfire2'


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  rootPage: any

  constructor(
      public platform: Platform,
      public af: AngularFire) {

    // Use Angularfire2 to set the rootPage
    // depending on whether or not we are signed in
    af.auth.subscribe(auth => {
      if (auth) {
        this.rootPage = UploadPage
      } else {
        this.rootPage = LoginPage
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
