import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor( private authService: AuthService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  loginWith(event, provider) {
    this.authService._webLogin(event, provider)
  }

}
