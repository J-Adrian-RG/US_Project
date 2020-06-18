import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword=false;
  passwordToggleIcon= 'eye-outline';
  constructor(public router: Router, 
    private navCtrl: NavController,
    private menu: MenuController) { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if(this.passwordToggleIcon == 'eye-outline'){
      this.passwordToggleIcon = 'eye-off-outline';
    }else{
      this.passwordToggleIcon = 'eye-outline';
    }
  }
  ngOnInit() {
  }

    getLogin(){
      this.router.navigate(['/maestros']);
    }
  

}
