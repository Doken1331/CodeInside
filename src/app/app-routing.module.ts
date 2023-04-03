import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'image', loadChildren: () => import('./modules/image/image.module').then(m => m.ImageModule) },
  { path: 'gif', loadChildren: () => import('./modules/gif/gif.module').then(m => m.GifModule) },
  { path: 'inscription', loadChildren: () => import('./modules/inscription/inscription.module').then(m => m.InscriptionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
