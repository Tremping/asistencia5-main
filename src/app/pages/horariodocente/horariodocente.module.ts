import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariodocentePageRoutingModule } from './horariodocente-routing.module';

import { HorariodocentePage } from './horariodocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariodocentePageRoutingModule
  ],
  declarations: [HorariodocentePage]
})
export class HorariodocentePageModule {}
