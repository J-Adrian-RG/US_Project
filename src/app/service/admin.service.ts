import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ToastController,LoadingController} from '@ionic/angular';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      private router: Router,
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

    // Obtener Maestro
  async getMaestro(  data: any ){
    if( data.Name == "" )  { 
      this.presentToast(  'Requiere nombre.' );
    }
    else if( data.Passw == "" )  {
      this.presentToast(  'Requiere contraseña.' );
    }
    else {
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Cargando...'
      });
      loader.present();
    return new Promise((resolve,reject)=>{
      this.httpC.get( this.url_Azure  + 'Admin?'  + 
        'Name=' + data.Name + 
        '&Passw=' + data.Passw  
        ).subscribe(( res:  any) => {
          if( res == true && data.Name == "Admin" )  {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Bienvenido');
            this.router.navigate(['/maestros']);
          }else if( res == true ){
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Bienvenido');
            this.router.navigate(['/schedule']);
          }
          else{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Usuario o contraseña incorrecta');
          }
          resolve(res);
        },  (err) =>  {
          reject(err);
        }); 
      });    
    }
  }

    // Funcion Agregar Maestros
  async postMaestro( data: any ){
    // Validaciones
    if( data.Name == ""  ) {
      this.presentToast(  'No ha añadido un nombre.' );
    } 
    else if( data.Lastname == ""  ) {
      this.presentToast(  'No ha añadido el apellido.' );
    } 
    else if( data.Num_employe == ""  ) {
      this.presentToast(  'Requiere numero de empleado.'  );
    } 
    else if( data.Passw == "" ) {
      this.presentToast( 'Requiere una contraseña.' );
    }
    else{
    //  Varibales de carga 
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Cargando...'
      });
    loader.present();
    // Envio de Datos
    return new Promise((resolve, reject) => {
      this.httpC.post(  this.url_Azure + 'Admin?' + 
      'Name=' + data.Name +
      '&Lastname=' + data.Lastname +
      '&Num_employe=' + data.Num_employe +
      '&Passw=' + data.Passw,
    // Ejecución
      JSON.stringify(data), {
        headers: new HttpHeaders({  
          'Content-Type':'application/json; charset= UTF-8'
        })
      })
      .subscribe((res:any) => {
        if(res == true) {
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
