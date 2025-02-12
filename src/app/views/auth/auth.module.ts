import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {
  SignInComponent,
  SignUpComponent,
  GoogleAuthComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    GoogleAuthComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
  ],
})
export class AuthModule {}
