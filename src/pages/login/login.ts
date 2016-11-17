import { Component } from '@angular/core'
import { AuthService } from '../../providers/auth-service'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor( private authService: AuthService ) {}

  loginWith(event, provider) {
    this.authService._webLogin(event, provider)
  }

}
