import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/service/admin.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-h',
  templateUrl: './modal-h.page.html',
  styleUrls: ['./modal-h.page.scss'],
})
export class ModalHPage implements OnInit {

  constructor(
    private adminService: AdminService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

    horario = {
      File: '',
      Num_employe: ''
    }

        // Cerrar Modal
  async closeModal(){
    await this.modalCtrl.dismiss();
  }

    // Funcion Agregar Horario
    addData(){
      this.adminService.postHorario(this.horario)
      .then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    }

    updateData(){
      this.adminService.putHorario(this.horario)
      .then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    }

}
