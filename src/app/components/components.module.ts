import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalMPageModule } from './modal-m/modal-m.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
    ModalMPageModule
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
