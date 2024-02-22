import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReglagePageRoutingModule } from './reglage-routing.module';

import { ReglagePage } from './reglage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReglagePageRoutingModule
  ],
  declarations: [ReglagePage]
})
export class ReglagePageModule {}
