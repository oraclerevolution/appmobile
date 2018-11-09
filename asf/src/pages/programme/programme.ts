import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { DetailsProgrammePage } from '../details-programme/details-programme';


@IonicPage()
@Component({
  selector: 'page-programme',
  templateUrl: 'programme.html',
})
export class ProgrammePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

 showProgram(){
   const modal = this.modalCtrl.create(DetailsProgrammePage);
   modal.present();
 }

 
  

}
