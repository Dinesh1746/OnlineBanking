import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ForgotUserIDComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ChangeUIDComponent } from './change-uid/change-uid.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { ImpsComponent } from './imps/imps.component';
import { NeftComponent } from './neft/neft.component';
import { RtgsComponent } from './rtgs/rtgs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OpenAccountComponent,
    ForgotUserIDComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    DashboardComponent,
    AccountStatementComponent,
    FundTransferComponent,
    ChangeUIDComponent,
    ChangePasswordComponent,
    AddPayeeComponent,
    ImpsComponent,
    NeftComponent,
    RtgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
