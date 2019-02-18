import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeCameraPage } from './code-camera';

@NgModule({
  declarations: [
    CodeCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CodeCameraPage),
  ],
})
export class CodeCameraPageModule {}
