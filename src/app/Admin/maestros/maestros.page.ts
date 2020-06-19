import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMPage } from 'src/app/components/modal-m/modal-m.page';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.page.html',
  styleUrls: ['./maestros.page.scss'],
})
export class MaestrosPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openNewRegister(){
    const modal = await this.modalCtrl.create({
      component: ModalMPage,
      cssClass: 'dialog-modal',
    });
    modal.present();
  }

}
