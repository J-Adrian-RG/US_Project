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
  ) {}

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


  // ----CRUD Maestro----

    // Obtener Maestros
  async getMaestros(  data: any ){
    return new Promise((resolve, reject)  => {
      this.httpC.get( this.url_Azure + 'Teacher',
      {        
        headers: new HttpHeaders({  
        'Content-Type':'application/json; charset= UTF-8'
      })
    })
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
          this.httpC.get( this.url_Azure + 'Teacher?' +
          'Num_employe=' + data,
          {        
            headers: new HttpHeaders({  
            'Content-Type':'application/json; charset= UTF-8',
          })
        })
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
      this.httpC.get( this.url_Azure  + 'Teacher?'  + 
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
      this.httpC.post(  this.url_Azure + 'Teacher?' + 
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

    // Funcion Elminar Maestro
    async deleteMaestro( data: any ){
      return new Promise((resolve,reject) => {
        this.httpC.delete(  this.url_Azure + 'Teacher?' +
        'Id=' + data)
        .subscribe((res)  =>  {
          this.presentToast('Maestro Eliminado.');
          resolve(res);
        },  (err) => {
          reject(err);
        });
      }); 
    };


  // ----CRUD Horarios----

        // Obtener Horarios
        async getHorarios(  data: any ){
          return new Promise((resolve, reject)  => {
            this.httpC.get( this.url_Azure + 'Schedule',
            {        
              headers: new HttpHeaders({  
              'Content-Type':'application/json; charset= UTF-8'
            })
          })
            .subscribe((res)  =>  {
              resolve(res);
            },  (err) =>  {
              reject(err);
            });
          });
        }

        // Obtener Horarios
        async getHorario(  data: any ){
          return new Promise((resolve, reject)  => {
            this.httpC.get( this.url_Azure + 'Schedule?' +
            "Num_employe=" + data,
            {        
              headers: new HttpHeaders({  
              'Content-Type':'application/json; charset= UTF-8'
            })
          })
            .subscribe((res)  =>  {
              resolve(res);
            },  (err) =>  {
              reject(err);
            });
          });
        }
        

    //Funcion Actualizar Horario 
  async putHorario( data: any ){
    return new Promise((resolve, reject)  =>  {
      this.httpC.put( this.url_Azure + 'Schedule?' +
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



  // --CRUD Evento--

  //Funcion Agregar Nuevo Evento
  async postEvent( data: any ){
    // Validaciones
    if( data.Title == ""  ) {
      this.presentToast(  'No ha añadido un titulo.' );
    } 
    else if( data.Text == ""  ) {
      this.presentToast(  'No ha añadido el asunto.' );
    } 
    else if( data.Date == ""  ) {
      this.presentToast(  'Requiere dia.'  );
    } 
    else if( data.Time == "" ) {
      this.presentToast( 'Requiere el mes.' );
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
      this.httpC.post(  this.url_Azure + 'Event?' + 
      'Title=' + data.Title +
      '&Text=' + data.Text +
      '&Date=' + data.Date +
      '&Time=' + data.Time ,
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
            this.presentToast('Evento Creado.');
        }
        resolve(res);
        }, (err) => {
          reject(err);
          });
      });
    };
  };


  // Obtener Eventos
    async getEvent( ){
      return new Promise((resolve, reject)  => {
        this.httpC.get( this.url_Azure + 'Event?' +
        'Eve=' + 'Evento',
        {        
          headers: new HttpHeaders({  
          'Content-Type':'application/json; charset= UTF-8',
          })
        })
        .subscribe((res)  =>  {
          resolve(res);
        },  (err) =>  {
          reject(err);
        });
      });
    }


        // Funcion Elminar Evento
  async deleteEvent( data: any ){
    return new Promise((resolve,reject) => {
      this.httpC.delete(  this.url_Azure + 'Event?' +
      'Id=' + data)
      .subscribe((res)  =>  {
        this.presentToast('Evento Eliminado.');
        resolve(res);
      },  (err) => {
        reject(err);
      });
    }); 
  };

  // -- CRUD Calendario --

    // Obtener Calendario
    async getCalendar( data : any ){
      return new Promise((resolve, reject)  => {
        this.httpC.get( this.url_Azure + 'Event',
        {        
          headers: new HttpHeaders({  
          'Content-Type':'application/json; charset= UTF-8',
          })
        })
        .subscribe((res)  =>  {
          resolve(res);
        },  (err) =>  {
          reject(err);
        });
      });
    }

    //Funcion Actualizar Calendario 
  async putCalendar( data: any ){
    return new Promise((resolve, reject)  =>  {
      this.httpC.put( this.url_Azure + 'Event?' +
      'FileName=' + data.FileName +
      '&Token=' + data.Token.split("&")[1] ,
        // Ejecución
        JSON.stringify(data), {
          headers: new HttpHeaders({  
          'Content-Type':'application/json; charset= UTF-8'
        })
      })
      .subscribe( (res: any) =>{
        if(res == true) {
          this.presentToast('Nuevo Calendario Agregado.');
        }
        resolve(res);
      }, (err) => {
        reject(err);
      })
    })
  }


}
