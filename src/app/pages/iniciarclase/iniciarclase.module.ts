import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarclasePageRoutingModule } from './iniciarclase-routing.module';

import { IniciarclasePage } from './iniciarclase.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarclasePageRoutingModule,
    QRCodeModule
  ],
  declarations: [IniciarclasePage]
})
export class IniciarclasePageModule {}
