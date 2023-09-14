import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import { IonicModule } from '@ionic/angular';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EdicionPageRoutingModule } from './edicion-routing.module';

import { EdicionPage } from './edicion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicionPageRoutingModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  declarations: [EdicionPage]
})
export class EdicionPageModule {}
