import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaestrosPageRoutingModule } from './maestros-routing.module';

import { MaestrosPage } from './maestros.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MaestrosPage]
})
export class MaestrosPageModule {}
