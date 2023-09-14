import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import { IonicModule } from '@ionic/angular';

import { RecuperacionPageRoutingModule } from './recuperacion-routing.module';

import { RecuperacionPage } from './recuperacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacionPageRoutingModule,
    ReactiveFormsModule,
    MatRippleModule
  ],
  declarations: [RecuperacionPage]
})
export class RecuperacionPageModule {}
