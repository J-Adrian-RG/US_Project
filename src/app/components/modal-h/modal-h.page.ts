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
        // Cerrar Modal
  async closeModal(){
    await this.modalCtrl.dismiss();
  }
}
