import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { SingleSpeakerPage } from '../single-speaker/single-speaker';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
  ]
  
  constructor(public navCtrl: NavController) {

  }

  navToInscription(){
    this.navCtrl.push(InscriptionPage);
  }

  navToSpeaker(){
    this.navCtrl.push(ListPage);
  }
  
  onLoadSpeaker(speaker: {name:string, description: string[], src: string}){
    this.navCtrl.push(SingleSpeakerPage, {speaker:speaker});
  }

}
