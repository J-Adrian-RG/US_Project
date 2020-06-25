import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMPage } from 'src/app/components/modal-m/modal-m.page';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.page.html',
  styleUrls: ['./maestros.page.scss'],
})
export class MaestrosPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public  adminService: AdminService
    ) { 
      this.getAll();
    }

  ngOnInit() {
  }

  maestros:any;
  

  async openNewRegister(){
    const modal = await this.modalCtrl.create({
      component: ModalMPage,
      cssClass: 'dialog-modal',
    });
    modal.present();
  }


  async getAll(){
    await this.adminService.getMaestros(this.maestros)
    .then(data  =>  {
        this.maestros = data
    },  (err) =>  {
      console.log(err);
    });
  };

  async deleteData(data:any){
    await this.adminService.deleteMaestro(data)
    .then((res)=>{
      console.log(res);
    },(err)=>
    {console.log(err);
    });
  };

  async deleteItem(data:any){
    let index = this.maestros.indexOf(data);
    if( index > -1 ){
      await this.maestros.splice( index,  1  );
    }
  }


}
