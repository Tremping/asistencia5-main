import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnunciosdocentePageRoutingModule } from './anunciosdocente-routing.module';

import { AnunciosdocentePage } from './anunciosdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnunciosdocentePageRoutingModule
  ],
  declarations: [AnunciosdocentePage]
})
export class AnunciosdocentePageModule {}
