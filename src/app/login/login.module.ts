import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormControlDirective } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NgControl} from '@angular/forms';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule, 
  ],
  declarations: [LoginPage],  
})
export class LoginPageModule {}
