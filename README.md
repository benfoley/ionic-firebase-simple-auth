Ionic2 Firebase Authentication example
=====

Simple demo of Firebase in Ionic2


## Setup

### Firebase project

Go to the Firebase console https://console.firebase.google.com/

Create a new Firebase project.

Enable Google as an authentication method (Authentication > Sign-In Method)

From the project Overview, click 'Add Firebase to your web app'. 
We'll need these config key:values later...


### Ionic2 project

Create a new Ionic2 project (or git clone this one).
At the time of writing, Ionic2 is at RC2 and is using Webpack for its build process.

    ionic start AppName blank --v2
    cd AppName

Install Angularfire2 packages

    npm install angularfire2 --save

We use both AngularFire and Firebase, so I'd usually install them both. But it seems that typescript is having issues with duplicate identifiers, so for now, just install angularfire2 which will install firebase as one of its dependencies.

### Add a new page for Login

    ionic g page login

### Auth provider

Copy the auth provider code into new `src/providers` directory

### Module imports

Import LoginPage, AuthService provider and angularfire2's AngularFireModule, AuthProviders, AuthMethods into `src/app/app.module.ts`. Add the config details. Add the new login page to the declarations and entryComponents. 
Add `AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)` into the imports: array. This initialises the firebase app with the config settings.

# What do the pages do

### App.component.ts

`App.component.ts` sets the rootPage based on whether we are signed in or not.

### Login page

Clicking the button loads the web login popup. We look for the value from that in the AuthService provider

### Home page

Just shows our displayname, from the authentication provider

### Upload page

User can select an xml file. The file contents are read and uploaded to a `files/userId` directory on Firebase Storage. No feedback yet about upload progress.

## Run

Get the code, install packages, run it

    git clone git@github.com:benfoley/ionic2-firebase-simple-auth.git
    npm install
    ionic serve
