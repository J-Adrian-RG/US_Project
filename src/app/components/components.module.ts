import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes agregados
import { HeaderComponent } from './header/header.component';
import { ModalMPageModule } from './modal-m/modal-m.module';
import { ModalHPageModule } from './modal-h/modal-h.module';
import { ModalEPageModule } from './modal-e/modal-e.module';
import { HeaderMComponent } from './header-m/header-m.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    HeaderMComponent,
    FooterComponent,
    ModalMPageModule,
    ModalHPageModule,
    ModalEPageModule
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
