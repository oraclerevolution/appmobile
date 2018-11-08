import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SingleSpeakerPage } from '../single-speaker/single-speaker';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  speakersList = [
    {
      src: "../../assets/imgs/logo.png",
      name: "assia jean",
      description: [
        'profession: web master',
        'poste: ministre des eaux et forêts'
      ]
    },
    {
      src: "../../assets/imgs/logo.png",
      name: "assia ngoran",
      description: [
        'profession: web designer',
        "poste: ministre de l'economie nationale"
      ]
    },
    {
      src: "../../assets/imgs/logo.png",
      name: "jean gontran",
      description: [
        'profession: web graphist',
        'poste: ministre de la defense'
      ]
    },
    {
      src: "../../assets/imgs/logo.png",
      name: "Oracle code",
      description: [
        'profession: web hacker',
        'poste: ministre des affaires exterieures'
      ]
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    onLoadSpeaker(speaker: {name:string, description: string[]}){
      this.navCtrl.push(SingleSpeakerPage, {speaker:speaker});
    }
}
