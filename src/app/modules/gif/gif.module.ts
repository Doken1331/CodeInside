import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifRoutingModule } from './gif-routing.module';
import { GifComponent } from './gif.component';

@NgModule({
  declarations: [
    GifComponent
  ],
  imports: [
    CommonModule,
    GifRoutingModule
  ]
})
export class GifModule { }
