import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service'
import { DataService } from '../../providers/data-service'

import firebase from 'firebase'


@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class Upload {

  files: File[]
  user: any
  state: string
  progress: string

  constructor(
      public authService: AuthService,
      public dataService: DataService
    ) {
    this.user = firebase.auth().currentUser
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Upload');
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

    let textFileAsBlob = new Blob([readerResult])
    let metadata = {
      contentType: 'text/xml',
      desc: 'some XML',
      lastModified: file.lastModified,
      originalName: file.name
    }
    const { uploadTask, done } = this.dataService.upload(textFileAsBlob, metadata)

    uploadTask.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.progress = percent.toFixed(2);
    })

    done.then((url) => {
      this.state = 'upload complete'
      console.log( 'uploading done then url', url )
    })

  }

  logout () {
    this.authService.logout()
  }

}
