import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEPage } from 'src/app/components/modal-e/modal-e.page';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(
    public adminService : AdminService,
    private modalCtrl: ModalController
  ) {
    this.getAllEvents();
  }

  ngOnInit() {
  }

  Events  : any; 

  async openNewEvent(){
    const modal = await this.modalCtrl.create({
      component: ModalEPage,
      cssClass: 'dialog-modal',
    });
    modal.present();
  };


  async getAllEvents(){
    await this.adminService.getEvent()
    .then(data  =>  {
        this.Events = data
    },  (err) =>  {
      console.log(err);
    });
  };

  async deleteData(data:any){
    await this.adminService.deleteEvent(data)
    .then((res)=>{
      console.log(res);
    },(err)=>
    {console.log(err);
    });
  };

  async deleteItem(data:any){
    let index = this.Events.indexOf(data);
    if( index > -1 ){
      await this.Events.splice( index,  1  );
    };
  };

  
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.getAllEvents();
  }

}
