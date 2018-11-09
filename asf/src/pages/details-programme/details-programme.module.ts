import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsProgrammePage } from './details-programme';

@NgModule({
  declarations: [
    DetailsProgrammePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsProgrammePage),
  ],
})
export class DetailsProgrammePageModule {}
