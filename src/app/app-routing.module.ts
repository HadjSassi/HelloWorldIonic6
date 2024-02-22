import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'appareils',
    loadChildren: () => import('./pages/appareils/appareils.module').then( m => m.AppareilsModule)
  },
  {
    path: '',
    redirectTo: 'tabs/appareil',
    pathMatch: 'full'
  },
  {
    path: 'single-appareil',
    loadChildren: () => import('./pages/appareils/single-appareil/single-appareil.module').then( m => m.SingleAppareilPageModule)
  },
  {
    path: 'reglage',
    loadChildren: () => import('./pages/settings/reglage/reglage.module').then( m => m.ReglagePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./pages/options/options.module').then( m => m.OptionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
