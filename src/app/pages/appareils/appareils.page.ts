import {Component, OnInit} from "@angular/core";
import {NavigationExtras, Router} from "@angular/router";
import {Appareil} from "../../../model/Appareil";
import {AppareilsService} from "../../../services/appareils.service";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'page-appareils',
  templateUrl: 'appareils.page.html',
  styleUrls : ['appareils.page.scss'],
})

export class AppareilsPage implements OnInit{

  appareilList: Appareil[] | undefined;

  constructor(private router: Router,
              private appareilService: AppareilsService) {}

  ngOnInit() {
    console.log("OkOk");
    // this.ionViewWillEnter();
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter...");
    this.appareilList = this.appareilService.appareilList.slice();
    console.log(this.appareilList);
  }

  onLoadAppareil(index: number) {
    console.log(`onLoadAppareil index: ${index}`);
    const params: NavigationExtras = {
      queryParams:{
        // appareil :JSON.stringify(appareil)
        index : index
      },
    }
    this.router.navigate(['/single-appareil'],params);
  }
}
