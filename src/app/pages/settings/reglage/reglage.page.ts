import {Component, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {AppareilsService} from "../../../../services/appareils.service";
import {Appareil} from "../../../../model/Appareil";

@Component({
  selector: 'app-reglage',
  templateUrl: './reglage.page.html',
  styleUrls: ['./reglage.page.scss'],
})
export class ReglagePage implements OnInit {

  constructor(private alertController: AlertController,
              private appareilService: AppareilsService) {
  }

  ngOnInit() {
    console.log("Reglage.page.ts");
  }

  async onToggleLights() {
    const alert = await this.alertController.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      subHeader: '...',
      message: 'Cette action allumera ou èteindra toutes les lumiéres de la maison!',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel',
          handler: () => {
            console.log('Annuler !')
          }
        }, {
          text: 'Confirmer',
          handler: () => {
            console.log('Confirmé !');
            this.toggleButtons();
          }
        }
      ]
    });
    await alert.present();
  }

  toggleButtons(){
    const isItOn = this.appareilService.appareilList[0].isOn;
    for (let i = 0 ; i < this.appareilService.appareilList.length; i++){
      this.appareilService.appareilList[i].isOn = !isItOn;
    }

  }
}
