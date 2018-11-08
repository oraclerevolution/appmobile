import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleSpeakerPage } from './single-speaker';

@NgModule({
  declarations: [
    SingleSpeakerPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleSpeakerPage),
  ],
})
export class SingleSpeakerPageModule {}
