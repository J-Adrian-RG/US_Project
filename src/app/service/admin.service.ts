import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ToastController,LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      public httpC: HttpClient
  ) { }
  

  url_Azure = "https://localhost:44326/api/";

  // Boton de carga
  disabledButton:any;
  
  // Funcion boton de carga
  ionViewDidEnter() {
    this.disabledButton = false;
  }

  // Toast
  async presentToast(a:any) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
    }

  // ----Crud Maestro----

  async getMaestros(){
    this.httpC.get('');
  }

  async postMaestro( data: any ){
    // Validaciones
    if ( data.name == ""  ) {
      this.presentToast(  'No ha añadido un nombre.' );
    } 
    else if ( data.lastname == ""  ) {
      this.presentToast(  'No ha añadido el apellido.' );
    } 
    else if ( data.num_employe == ""  ) {
      this.presentToast(  'Requiere numero de empleado.'  );
    } 
    else if ( data.passw == "" ) {
      this.presentToast( 'Requiere una contraseña.' );
    }
    else {
    //  Varibales de carga 
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Cargando...'
      });
    loader.present();
    // Envio de Datos
    return new Promise((resolve, reject) => {
      this.httpC.post(  this.url_Azure + 'Admin?' + 
      'name= ' + data.name +
      '&lastname= ' + data.lastname +
      '&num_employe= ' + data.num_employe +
      '&passw= ' + data.passw,
    // Ejecución
      JSON.stringify(data), {
        headers: new HttpHeaders({  
          'Content-Type':'application/json; charset= UTF-8'
        })
      })
      .subscribe((res:any) => {
        if (res == true) {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Ya tiene una usuario con estos datos.');
        }else{
          loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Registro exitoso.');
        }
        resolve(res);
        }, (err) => {
          reject(err);
          });
      });
    }
  }


  async putMaestro( data: any ){
    
  }

  async deleteMaestro( data: any ){
    this.httpC.delete('');
  }

}
