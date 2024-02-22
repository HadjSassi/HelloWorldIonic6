import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Appareil} from "../../../../model/Appareil";
import {AppareilsService} from "../../../../services/appareils.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  appareil !: Appareil;
  index : number | undefined;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private alertController: AlertController,
              private appareilsService: AppareilsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params){
        this.index = params['index'];
        console.log(`index : ${this.index}`);
        this.appareil = this.appareilsService.appareilList[this.index!];
        console.log(this.appareil);
      }
    })
  }

  onToggleAppariel(flag: boolean){
    this.appareil.isOn = flag;
    this.onToggleLights(this.appareil.isOn);
  }

  async onToggleLights(isItOn: boolean) {
    const alert = await this.alertController.create({
      header: 'Appareil allumé ? => '+isItOn,
      buttons: [
        {
          text: 'Fermer',
          role: 'Cancel',
        }
      ]
    });
    await alert.present();
  }

}
