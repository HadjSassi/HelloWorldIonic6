import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { AppareilsPage } from "./appareils.page";
import { AppareilsRoutingModule } from "./appareils-routing.module";

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    IonicModule,
    AppareilsRoutingModule
  ],
  declarations : [AppareilsPage]
})

export class AppareilsModule{}
