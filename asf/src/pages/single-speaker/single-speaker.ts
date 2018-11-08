import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-single-speaker',
  templateUrl: 'single-speaker.html',
})
export class SingleSpeakerPage implements OnInit {

  speaker: {
    img: string,
    name: string,
    description: string[],

  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.speaker = this.navParams.get('speaker');
  }


}
