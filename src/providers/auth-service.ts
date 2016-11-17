import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthService {

  public userData: any
  public user: any

  // this is using the underlying firebase library rather than AngularFire

  constructor() {
    this._initialize()
  }

  _initialize() {
    // process login
    firebase.auth().getRedirectResult().then((result) => {
      let user = result.user
      if (user) {
        console.log('AuthService getRedirectResult user')
        console.log(user)
        this.user = user
      }
    })
    // is user signed in ? eg returning, already authenticated
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // user is signed in
        console.log('AuthService onAuthStateChanged user')
        this.user = user
      } else {
        // no user is signed in - clean up
      }
    })
  }

  _webLogin(event, provider) {
    let authProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(authProvider).then(function(result) {
      // The signed-in user info
      var user = result.user
      console.log(user.email)
      console.log(user.displayName)

    }).catch(function(error: any) {
      // Handle Errors here
      var errorCode = error.code
      var errorMessage = error.message
      var email = error.email
      console.log('error with', email, errorMessage, errorCode)
    });
  }

  logout() {
    console.log( 'logging out' )
    firebase.auth().signOut()
  }

}
