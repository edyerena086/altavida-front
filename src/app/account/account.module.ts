import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

//Material design
import { MaterialModule } from '../libs/materials';

@NgModule({
  declarations: [LoginComponent, PasswordRecoveryComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ]
})
export class AccountModule { }
