import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/service/admin.service';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-modal-e',
  templateUrl: './modal-e.page.html',
  styleUrls: ['./modal-e.page.scss'],
})
export class ModalEPage implements OnInit {

  constructor(
    public adminService: AdminService,
    private modalCtrl: ModalController
  ) {
    
}

  ngOnInit() {

  }

  event= {
    Title : '',
    Text  : '',
    Date  : moment().format('MMMM Do YYYY'),
    Time  : moment().format('h:mm a'),
  }

      // Cerrar Modal
      async closeModal(){
        await this.modalCtrl.dismiss();
      }

    // Funcion Agregar Evento
    addEvent(){
      this.adminService.postEvent(this.event).then((res)=>{
      },(err)=>{
        console.log(err);
      });
    }

}
