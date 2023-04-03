import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InscriptionModule { }
