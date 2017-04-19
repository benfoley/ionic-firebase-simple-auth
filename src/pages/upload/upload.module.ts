import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Upload } from './upload';

@NgModule({
  declarations: [
    Upload,
  ],
  imports: [
    IonicPageModule.forChild(Upload),
  ],
  exports: [
    Upload
  ]
})
export class UploadModule {}
