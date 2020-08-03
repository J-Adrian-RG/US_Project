import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheirschedulePageRoutingModule } from './theirschedule-routing.module';

import { TheirschedulePage } from './theirschedule.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheirschedulePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TheirschedulePage]
})
export class TheirschedulePageModule {}
