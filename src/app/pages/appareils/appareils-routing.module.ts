import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { AppareilsPage } from './appareils.page';

const routes : Routes = [
  {
    path:'',
    component: AppareilsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class AppareilsRoutingModule{}
