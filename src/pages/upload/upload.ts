import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service'
import { Util } from '../../providers/util'
import firebase from 'firebase'

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {

  files: File[]
  user: any
  storageRef: any

  constructor(
      public authService: AuthService,
      private util: Util
    ) {
    this.user = firebase.auth().currentUser
  }

  fileChange(event) {
    this.files = event.target.files
    for (let file of this.files) {
      var reader = new FileReader()
      reader.onload = (e) => this.processFile(file, reader.result)
      reader.readAsText(file, 'UTF-8')
    }
  }

  processFile (file, readerResult) {
    let textFileAsBlob = new Blob([readerResult], { type: 'text/xml' })
    let metadata = {
      contentType: 'text/xml',
      desc: 'some XML',
      lastModified: file.lastModified,
      originalName: file.name
    }
    this.upload(textFileAsBlob, metadata)
  }


  upload(file, metadata) {
    // where to put the files
    this.storageRef = firebase.storage().ref('/files/' + this.user.uid)

    // make a new ID for this upload
    let newId = this.util.makeId()

    console.log('uploading', newId)

    // do something with the file contents
    this.storageRef.child(newId).put(file, metadata)
  }

  logout () {
    this.authService.logout()
  }

}
