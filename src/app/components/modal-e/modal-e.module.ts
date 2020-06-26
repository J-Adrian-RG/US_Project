import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEPageRoutingModule } from './modal-e-routing.module';

import { ModalEPage } from './modal-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEPageRoutingModule
  ],
  declarations: [ModalEPage]
})
export class ModalEPageModule {}
