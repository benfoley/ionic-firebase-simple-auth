import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'
import { AuthService } from '../providers/auth-service'
import { Util } from '../providers/util'
import firebase from 'firebase'

@Injectable()
export class DataService {

  storageRef: any
  user: any

  constructor(
      public authService: AuthService,
      private util: Util
    ) {
    this.user = firebase.auth().currentUser
  }

  upload(file, metadata) {
    // where to put the files
    this.storageRef = firebase.storage().ref('/files/' + this.user.uid)

    // make a new ID for this upload
    let newId = this.util.makeId()
    console.log('uploading', newId)
    // do something with the file contents
    let fileStoreRef = this.storageRef.child(newId)
    let uploadTask = fileStoreRef.put(file, metadata)

    let uploadPromise = new Promise((resolve, reject) => {

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, (error) => {
        // Handle unsuccessful uploads - reject the promise
        reject(error)
      }, () => {
        console.log('Upload is done');
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        let downloadURL = uploadTask.snapshot.downloadURL;
        resolve(downloadURL) // resolve the promise
      });  // end of uploadTask.on complete

    }) // end of uploadPromise

    // and now return an object with the new id, the upload task and the promise
    return {
      id: newId,
      uploadTask: uploadTask,
      done: uploadPromise
    }
  } // end of upload method
}
