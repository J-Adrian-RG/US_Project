import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import {  AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-modal-m',
  templateUrl: './modal-m.page.html',
  styleUrls: ['./modal-m.page.scss'],
})
export class ModalMPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public adminService: AdminService
    ) { }

  ngOnInit() {
  }
  
  // Objeto 'maestro'
  maestro = { 
    Name:  '',
    Lastname:  '',
    Num_employe:  '',
    Passw: '' 
  }

    // Cerrar Modal
  async closeModal(){
    await this.modalCtrl.dismiss();
  }

    // Funcion Agregar Maestro
    addData(){
      this.adminService.postMaestro(this.maestro).then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    }

}
