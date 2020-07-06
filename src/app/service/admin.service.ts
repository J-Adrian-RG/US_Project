import { Injectable } from '@angular/core';
//Imports agregados
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
  ) {

  }
  //https://localhost:44326
//https://utem-schedule.azurewebsites.net
  url_Azure = "https://utem-schedule.azurewebsites.net/api/";
  

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
      duration: 2500,
    });
    toast.present();
    }


  // ----Crud Maestro----

    // Obtener Maestros
  async getMaestros(  data: any ){
    return new Promise((resolve, reject)  => {
      this.httpC.get( this.url_Azure + 'Admin')
      .subscribe((res)  =>  {
        resolve(res);
      },  (err) =>  {
        reject(err);
      });
    });
  }


      // Obtener Maestro
      async getMaestro( data:any  ){
        return new Promise((resolve, reject)  => {
          this.httpC.get( this.url_Azure + 'User?' +
          'Num_employe=' + data 
          )
          .subscribe((res)  =>  {
            resolve(res);
          },  (err) =>  {
            reject(err);
          });
        });
      }


      // Obtener Horarios
      async getHorarios(  data: any ){
        return new Promise((resolve, reject)  => {
          this.httpC.get( this.url_Azure + 'User')
          .subscribe((res)  =>  {
            resolve(res);
          },  (err) =>  {
            reject(err);
          });
        });
      }


    // Funcion Acceder a Cuenta
  async getLogin(  data: any ){
    if( data.Num_employe == "" )  { 
      this.presentToast(  'Requiere Numero de emplero.' );
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
        'Num_employe=' + data.Num_employe + 
        '&Passw=' + data.Passw  
        ).subscribe(( res:  any) => {
          if( res == true && data.Num_employe == "Admin" )  {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Bienvenido');
            this.router.navigate(['/maestros']);
          
          }else if( res == true ){
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Bienvenido');
            this.router.navigate(['/menu/schedule']);
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
    };
  };

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
    else if( data.File_Url == "" ) {
      this.presentToast( 'Requiere Archivo.' );
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
      '&Passw=' + data.Passw +
      '&FileName=' + data.File_Name +
      '&Token=' + data.Token.split("&")[1],
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
    };
  };

    //Funcion Actualizar Horario 
  async putHorario( data: any ){
    return new Promise((resolve, reject)  =>  {
      this.httpC.put( this.url_Azure + 'Admin?' +
      'FileName=' + data.FileName +
      '&Token=' + data.Token.split("&")[1] +
      '&Num_employe=' + data.Num_employe,
        // Ejecución
        JSON.stringify(data), {
          headers: new HttpHeaders({  
          'Content-Type':'application/json; charset= UTF-8'
        })
      })
      .subscribe( (res: any) =>{
        if(res == true) {
          this.presentToast('Horario cambiado.');
        }
        else{
          this.presentToast('No existe Numero de empleado.');
        }
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }

    // Funcion Elminar Maestro
  async deleteMaestro( data: any ){
    return new Promise((resolve,reject) => {
      this.httpC.delete(  this.url_Azure + 'Admin?' +
      'Id=' + data)
      .subscribe((res)  =>  {
        this.presentToast('Maestro Eliminado.');
        resolve(res);
      },  (err) => {
        reject(err);
      });
    }); 
  };

}
