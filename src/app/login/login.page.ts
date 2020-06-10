import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword=false;
  passwordToggleIcon= 'eye-outline';
  constructor() { }

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

}
