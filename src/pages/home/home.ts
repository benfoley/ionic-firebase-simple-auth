import { Component } from '@angular/core'
import { AuthService } from '../../providers/auth-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any

  constructor( public authService: AuthService ) {
    this.user = firebase.auth().currentUser
  }

  logout () {
    this.authService.logout()
  }
}
