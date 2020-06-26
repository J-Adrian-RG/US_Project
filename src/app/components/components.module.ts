import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalMPageModule } from './modal-m/modal-m.module';
import { ModalHPage } from './modal-h/modal-h.page';
import { ModalHPageModule } from './modal-h/modal-h.module';
import { ModalEPageModule } from './modal-e/modal-e.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
    ModalMPageModule,
    ModalHPageModule,
    ModalEPageModule
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
