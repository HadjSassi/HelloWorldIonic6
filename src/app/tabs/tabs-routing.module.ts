import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'appareil',
        loadChildren: () => import('../pages/appareils/appareils.module').then(m => m.AppareilsModule)
      },
      {
        path:'settings',
        loadChildren: () => import('../pages/settings/reglage/reglage-routing.module').then(m => m.ReglagePageRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
