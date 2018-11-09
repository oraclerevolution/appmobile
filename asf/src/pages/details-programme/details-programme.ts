import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-programme',
  templateUrl: 'details-programme.html',
})
export class DetailsProgrammePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsProgrammePage');
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
