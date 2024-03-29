import { Component } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menuCtrl: MenuController,
    private router: Router
  ) {}

  onNavigate(page: string) {
    this.router.navigate([page]);
    this.menuCtrl.close();
  }
}
