import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Upload } from './upload';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    Upload,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Upload),
  ],
  exports: [
    Upload
  ]
})
export class UploadModule {}
