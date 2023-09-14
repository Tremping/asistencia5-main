import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import { IonicModule } from '@ionic/angular';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CertificadoPageRoutingModule } from './certificado-routing.module';

import { CertificadoPage } from './certificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificadoPageRoutingModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  declarations: [CertificadoPage]
})
export class CertificadoPageModule {}
