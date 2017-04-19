Ionic Firebase Authentication example
=====

Simple demo of Firebase in Ionic

Updated for Ionic 3.0.1

## Setup

Get the code, install packages, run it

    git clone ...
    cd ...
    npm install
    ionic serve


### Firebase project

Go to the Firebase console https://console.firebase.google.com/

Create a new Firebase project.

Enable Google as an authentication method (Authentication > Sign-In Method)

From the project Overview, click 'Add Firebase to your web app'. 
We'll need these config key:values later...

Set the Firebase storage to enable file upload too. 
https://console.firebase.google.com/project/PROJECT-NAME/storage/files



# What do the pages do

### Module imports

Import LoginPage, AuthService provider and angularfire2's AngularFireModule, AuthProviders, AuthMethods into `src/app/app.module.ts`. Add the config details. Add the new login page to the declarations and entryComponents. 
Add `AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)` into the imports: array. This initialises the firebase app with the config settings.

### App.component.ts

`App.component.ts` sets the rootPage based on whether we are signed in or not.

### Login page

Clicking the button loads the web login popup. We look for the value from that in the AuthService provider

### Home page

Just shows our displayname, from the authentication provider

### Upload page

User can select an xml file. The file contents are read and uploaded to a `files/userId` directory on Firebase Storage. No feedback yet about upload progress.
