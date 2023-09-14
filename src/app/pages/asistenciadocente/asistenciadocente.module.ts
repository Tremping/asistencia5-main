import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciadocentePageRoutingModule } from './asistenciadocente-routing.module';

import { AsistenciadocentePage } from './asistenciadocente.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciadocentePageRoutingModule,
    QRCodeModule
  ],
  declarations: [AsistenciadocentePage]
})
export class AsistenciadocentePageModule {}
