import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMPageRoutingModule } from './modal-m-routing.module';

import { ModalMPage } from './modal-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMPageRoutingModule
  ],
  declarations: [ModalMPage]
})
export class ModalMPageModule {}
