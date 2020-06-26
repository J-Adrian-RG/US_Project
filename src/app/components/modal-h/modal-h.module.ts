import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalHPageRoutingModule } from './modal-h-routing.module';

import { ModalHPage } from './modal-h.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalHPageRoutingModule
  ],
  declarations: [ModalHPage]
})
export class ModalHPageModule {}
